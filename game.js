/**
 * MENGÃO RUN - Jogo de Corrida Infinita
 * Estilo: Pixel Art 16-bit Super Nintendo
 * Tema: Flamengo
 */

class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        
        // Dimensões do jogo
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        
        // Sistema de renderização
        this.pixelArt = new PixelArtRenderer(this.ctx);
        this.soundGenerator = new SoundGenerator();
        
        // Estado do jogo
        this.gameOver = false;
        this.gameRunning = true;
        this.victory = false;
        this.paused = false;
        this.level = 1;
        
        // Pontuação e estatísticas
        this.score = 0;
        this.highScore = localStorage.getItem('mengaoRunHighScore') || 0;
        this.multiplier = 1;
        this.enemiesPassed = 0;
        this.baseScrollSpeed = 3;
        this.scrollSpeed = this.baseScrollSpeed;
        this.scrollOffset = 0;
        
        // Distância para vitória
        this.goalDistance = 5000;
        this.distanceTraveled = 0;
        
        // Objetos do jogo
        this.player = {
            x: 30,
            y: this.height / 2,
            width: 30,
            height: 80,
            velocityY: 0,
            jumping: false,
            jumpPower: 18,
            gravity: 0.7,
            groundLevel: this.height / 2
        };

        this.enemies = [];
        this.particles = [];
        this.bonusStars = [];
        
        // Timing e spawn
        this.enemySpawnRate = 120; // frames entre adversários
        this.enemySpawnCounter = 0;
        this.frameCount = 0;
        this.difficultyIncreaseRate = 300;
        this.enemyTypeCounter = 0; // Contador para alternar tipos de inimigos
        
        // Input
        this.keys = {};
        this.setupInputListeners();
        
        // UI
        this.updateScore();
        this.updateHighScore();
        
        // Iniciar game loop
        this.gameLoop();
    }

    /**
     * Setup de controles
     */
    setupInputListeners() {
        document.addEventListener('keydown', (e) => {
            this.keys[e.code] = true;
            
            // Pular com Space ou ArrowUp
            if ((e.code === 'Space' || e.code === 'ArrowUp') && this.gameRunning) {
                e.preventDefault();
                this.jump();
            }
            
            // Reiniciar com Enter
            if (e.code === 'Enter') {
                if (this.gameOver) {
                    this.restart();
                } else if (this.victory) {
                    this.nextLevel();
                }
            }
        });

        document.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
        });

        // Suporte a toque para mobile
        document.addEventListener('touchstart', (e) => {
            if (this.gameRunning) {
                e.preventDefault();
                this.jump();
            }
        }, { passive: false });

        document.addEventListener('touchend', (e) => {
            e.preventDefault();
        }, { passive: false });

        // Clique do mouse também dispara pulo (para testes)
        document.addEventListener('click', (e) => {
            if (this.gameRunning && e.target.id === 'gameCanvas') {
                this.jump();
            }
        });

        // Botões da UI - com delegação de eventos e suporte a touch
        const handleButtonClick = (e) => {
            const button = e.target.closest('#restartBtn, #nextLevelBtn');
            if (!button) return;
            
            e.preventDefault();
            e.stopPropagation();
            
            if (button.id === 'restartBtn') {
                this.restart();
            } else if (button.id === 'nextLevelBtn') {
                this.nextLevel();
            }
        };
        
        document.addEventListener('click', handleButtonClick, true);
        document.addEventListener('touchend', handleButtonClick, true);
        
        // Direct listeners como fallback
        setTimeout(() => {
            const restartBtn = document.getElementById('restartBtn');
            const nextLevelBtn = document.getElementById('nextLevelBtn');
            
            if (restartBtn) {
                restartBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.restart();
                }, true);
                
                restartBtn.addEventListener('touchend', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.restart();
                }, true);
            }
            
            if (nextLevelBtn) {
                nextLevelBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.nextLevel();
                }, true);
                
                nextLevelBtn.addEventListener('touchend', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.nextLevel();
                }, true);
            }
        }, 100);
    }

    /**
     * Função de pulo do jogador
     */
    jump() {
        if (!this.player.jumping) {
            this.player.velocityY = -this.player.jumpPower;
            this.player.jumping = true;
            this.soundGenerator.playJump();
        }
    }

    /**
     * Spawn de um novo adversário
     */
    spawnEnemy() {
        // Alternar entre tipos de adversários: 0 = jogador rivaldo (verde), 1 = árbitro, 2 = jornalista
        const types = ['player', 'referee', 'journalist'];
        const enemyType = types[this.enemyTypeCounter % 3];
        this.enemyTypeCounter++;
        
        const enemy = {
            x: this.width,
            y: this.player.groundLevel,
            width: 30,
            height: 80,
            speed: this.scrollSpeed + 2,
            type: enemyType
        };
        this.enemies.push(enemy);
    }

    /**
     * Spawn de múltiplos adversários com variação de altura
     */
    spawnMultipleEnemies(count) {
        const types = ['player', 'referee', 'journalist'];
        
        for (let i = 0; i < count; i++) {
            // Manter todos no mesmo nível Y (enfileirados)
            const enemyType = types[this.enemyTypeCounter % 3];
            this.enemyTypeCounter++;
            
            const enemy = {
                x: this.width + (i * 50),
                y: this.player.groundLevel,
                width: 30,
                height: 80,
                speed: this.scrollSpeed + 2,
                type: enemyType
            };
            this.enemies.push(enemy);
        }
    }

    /**
     * Spawn de bônus (estrela)
     */
    spawnBonus() {
        if (Math.random() < 0.05) {
            const bonus = {
                x: this.width,
                y: this.player.groundLevel - 60,
                width: 15,
                height: 15,
                collected: false
            };
            this.bonusStars.push(bonus);
        }
    }

    /**
     * Detecta colisão entre dois retângulos
     */
    isColliding(rect1, rect2) {
        return rect1.x < rect2.x + rect2.width &&
               rect1.x + rect1.width > rect2.x &&
               rect1.y < rect2.y + rect2.height &&
               rect1.y + rect1.height > rect2.y;
    }

    /**
     * Atualiza a física do jogo
     */
    update() {
        if (!this.gameRunning) return;

        // Atualizar posição do jogador com gravidade
        if (this.player.jumping) {
            this.player.velocityY += this.player.gravity;
            this.player.y += this.player.velocityY;

            // Verificar se voltou ao chão
            if (this.player.y >= this.player.groundLevel) {
                this.player.y = this.player.groundLevel;
                this.player.velocityY = 0;
                this.player.jumping = false;
            }
        }

        // Movimento do mundo (scroll)
        this.scrollOffset += this.scrollSpeed;
        this.distanceTraveled += this.scrollSpeed;

        // Atualizar adversários
        for (let i = this.enemies.length - 1; i >= 0; i--) {
            this.enemies[i].x -= this.enemies[i].speed;

            // Verificar colisão com o jogador
            if (this.isColliding(this.player, this.enemies[i])) {
                this.hitEnemy();
                return;
            }

            // Remover adversários que saíram da tela
            if (this.enemies[i].x < -this.enemies[i].width) {
                this.enemies.splice(i, 1);
                this.enemiesPassed++;
                this.addScore(10 * this.multiplier);
                this.soundGenerator.playPoint();
                
                // Aumentar velocidade gradualmente
                this.scrollSpeed = this.baseScrollSpeed + (this.enemiesPassed * 0.05);
            }
        }

        // Atualizar bônus
        for (let i = this.bonusStars.length - 1; i >= 0; i--) {
            this.bonusStars[i].x -= this.scrollSpeed;

            // Verificar coleta de bônus (durante o pulo ou colisão)
            if (!this.bonusStars[i].collected && 
                (this.player.jumping || this.isColliding(this.player, this.bonusStars[i]))) {
                
                // Verificar se realmente há colisão
                if (this.isColliding(this.player, this.bonusStars[i])) {
                    this.bonusStars[i].collected = true;
                    this.multiplier++;
                    this.addScore(50 * this.multiplier);
                    this.soundGenerator.playPoint();
                    this.createParticles(this.bonusStars[i].x, this.bonusStars[i].y);
                    
                    // Remover bônus após animação
                    setTimeout(() => {
                        const idx = this.bonusStars.findIndex(b => b === this.bonusStars[i]);
                        if (idx !== -1) {
                            this.bonusStars.splice(idx, 1);
                        }
                    }, 300);
                }
            }

            // Remover bônus que saíram da tela
            if (this.bonusStars[i].x < -this.bonusStars[i].width) {
                this.bonusStars.splice(i, 1);
            }
        }

        // Atualizar partículas
        for (let i = this.particles.length - 1; i >= 0; i--) {
            this.particles[i].life--;
            this.particles[i].x += this.particles[i].vx;
            this.particles[i].y += this.particles[i].vy;

            if (this.particles[i].life <= 0) {
                this.particles.splice(i, 1);
            }
        }

        // Spawn de novos adversários
        this.enemySpawnCounter++;
        if (this.enemySpawnCounter >= this.enemySpawnRate) {
            // Sistema progressivo de dificuldade com melhor alternância
            // Fase 1 (0-15): 1 adversário, ocasionalmente 2
            // Fase 2 (15-30): Frequentemente 2 adversários
            // Fase 3 (30+): Variação entre 2 e 3 adversários
            
            const adversariospassed = this.enemiesPassed;
            let enemyCount = 1;
            
            if (adversariospassed >= 30) {
                // Fase 3: Mais desafio - 2 ou 3 adversários
                enemyCount = Math.random() < 0.4 ? 2 : 3;
            } else if (adversariospassed >= 15) {
                // Fase 2: Transição - frequentemente 2 adversários
                enemyCount = Math.random() < 0.6 ? 2 : 1;
            } else {
                // Fase 1: Ocasionalmente 2 adversários
                enemyCount = Math.random() < 0.3 ? 2 : 1;
            }
            
            // Spawn dos adversários
            if (enemyCount > 1) {
                this.spawnMultipleEnemies(enemyCount);
            } else {
                this.spawnEnemy();
            }
            
            this.enemySpawnCounter = 0;
            
            // Aumentar dificuldade - diminuir intervalo de spawn
            if (this.enemiesPassed % 5 === 0 && this.enemySpawnRate > 60) {
                this.enemySpawnRate -= 2;
            }
        }

        // Spawn bônus aleatoriamente
        this.spawnBonus();

        // Verificar vitória
        if (this.distanceTraveled >= this.goalDistance) {
            this.winGame();
        }

        // Atualizar UI
        document.getElementById('multiplier').textContent = this.multiplier + 'x';
    }

    /**
     * Colisão com adversário
     */
    hitEnemy() {
        this.gameRunning = false;
        this.gameOver = true;
        this.soundGenerator.playCollision();
        
        // Mostrar modal de game over
        this.showGameOverModal();
    }

    /**
     * Jogador venceu
     */
    winGame() {
        this.gameRunning = false;
        this.victory = true;
        this.soundGenerator.playVictory();
        
        // Aumentar score de vitória
        this.addScore(500 * this.multiplier);
        
        // Mostrar modal de vitória
        this.showVictoryModal();
    }

    /**
     * Criar partículas
     */
    createParticles(x, y, count = 5) {
        for (let i = 0; i < count; i++) {
            const angle = (Math.PI * 2 * i) / count;
            this.particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * 3,
                vy: Math.sin(angle) * 3,
                life: 30,
                color: '#ffff00'
            });
        }
    }

    /**
     * Adiciona pontos ao score
     */
    addScore(points) {
        this.score += points;
        document.getElementById('score').textContent = this.score;

        // Atualizar recorde
        if (this.score > this.highScore) {
            this.highScore = this.score;
            localStorage.setItem('mengaoRunHighScore', this.highScore);
            this.updateHighScore();
        }
    }

    /**
     * Atualiza exibição de score
     */
    updateScore() {
        document.getElementById('score').textContent = this.score;
    }

    /**
     * Atualiza exibição de recorde
     */
    updateHighScore() {
        document.getElementById('high-score').textContent = this.highScore;
    }

    /**
     * Desenha o jogo
     */
    draw() {
        // Limpar canvas
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Desenhar fundo
        this.pixelArt.drawBackground(this.ctx, this.width, this.height, this.scrollOffset);

        // Desenhar meta (goal)
        const goalX = this.width - (this.goalDistance - this.distanceTraveled);
        if (goalX > 0 && goalX < this.width) {
            this.pixelArt.drawGoal(goalX, this.height / 2 - 20);
            
            // Indicador visual de proximidade
            const distToGoal = this.goalDistance - this.distanceTraveled;
            if (distToGoal < 200) {
                this.ctx.fillStyle = 'rgba(255, 215, 0, 0.4)';
                this.ctx.fillRect(goalX - 40, this.height / 2 - 100, 80, 80);
                
                // Texto de alerta
                this.ctx.fillStyle = '#ffff00';
                this.ctx.font = 'bold 16px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('META PRÓXIMA!', goalX, this.height / 2 - 110);
            }
        }

        // Desenhar bônus
        for (let bonus of this.bonusStars) {
            this.pixelArt.drawTrophy(bonus.x, bonus.y);
        }

        // Desenhar adversários
        for (let enemy of this.enemies) {
            if (enemy.type === 'referee') {
                this.pixelArt.drawReferee(enemy.x, enemy.y);
            } else if (enemy.type === 'journalist') {
                this.pixelArt.drawJournalist(enemy.x, enemy.y);
            } else {
                // Tipo padrão: jogador rivaldo
                this.pixelArt.drawEnemy(enemy.x, enemy.y);
            }
        }

        // Desenhar partículas
        for (let particle of this.particles) {
            this.ctx.fillStyle = particle.color;
            this.ctx.globalAlpha = particle.life / 30;
            this.ctx.fillRect(particle.x, particle.y, 3, 3);
            this.ctx.globalAlpha = 1;
        }

        // Desenhar jogador
        this.pixelArt.drawPlayer(this.player.x, this.player.y, this.player.jumping);

        // Desenhar informação de distância
        const distRemaining = Math.max(0, this.goalDistance - this.distanceTraveled);
        this.ctx.fillStyle = '#ffff00';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.fillText(`Distância: ${Math.floor(this.distanceTraveled)}m / ${this.goalDistance}m`, 10, 20);

        // Barra de progresso
        const progressWidth = (this.distanceTraveled / this.goalDistance) * 200;
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        this.ctx.fillRect(10, 35, 200, 10);
        this.ctx.fillStyle = '#c41e3a';
        this.ctx.fillRect(10, 35, Math.min(progressWidth, 200), 10);
        this.ctx.strokeStyle = '#fff';
        this.ctx.strokeRect(10, 35, 200, 10);
    }

    /**
     * Loop principal do jogo
     */
    gameLoop() {
        if (this.gameRunning) {
            this.update();
        }
        this.draw();
        this.frameCount++;
        
        requestAnimationFrame(() => this.gameLoop());
    }

    /**
     * Mostra modal de game over
     */
    showGameOverModal() {
        document.getElementById('finalScore').textContent = this.score;
        document.getElementById('recordScore').textContent = this.highScore;
        document.getElementById('enemiesPassed').textContent = this.enemiesPassed;
        
        const modal = document.getElementById('gameOverModal');
        modal.classList.add('show');
    }

    /**
     * Mostra modal de vitória
     */
    showVictoryModal() {
        document.getElementById('victoryScore').textContent = this.score;
        document.getElementById('enemiesDefeated').textContent = this.enemiesPassed;
        
        const modal = document.getElementById('victoryModal');
        modal.classList.add('show');
    }

    /**
     * Reinicia o jogo
     */
    restart() {
        // Esconder modais
        document.getElementById('gameOverModal').classList.remove('show');
        document.getElementById('victoryModal').classList.remove('show');

        // Resetar estado
        this.gameOver = false;
        this.victory = false;
        this.gameRunning = true;
        this.paused = false;
        this.level = 1;
        
        // Resetar pontuação
        this.score = 0;
        this.multiplier = 1;
        this.enemiesPassed = 0;
        this.scrollSpeed = this.baseScrollSpeed;
        this.scrollOffset = 0;
        this.distanceTraveled = 0;
        
        // Resetar dados do jogador
        this.player.y = this.player.groundLevel;
        this.player.velocityY = 0;
        this.player.jumping = false;
        
        // Limpar objetos
        this.enemies = [];
        this.particles = [];
        this.bonusStars = [];
        this.enemySpawnCounter = 0;
        this.enemySpawnRate = 120;
        this.enemyTypeCounter = 0; // Resetar contador de tipos
        
        // Atualizar UI
        this.updateScore();
        document.getElementById('multiplier').textContent = '1x';
    }

    /**
     * Próximo nível
     */
    nextLevel() {
        this.level++;
        this.baseScrollSpeed += 1;
        this.goalDistance += 2000;
        this.restart();
    }
}

/**
 * Inicializar jogo quando o DOM estiver carregado
 */
document.addEventListener('DOMContentLoaded', () => {
    const game = new Game('gameCanvas');
});
