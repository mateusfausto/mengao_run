/**
 * Sistema de Pixel Art para o jogo Mengão Run
 * Todos os personagens e elementos são desenhados usando Canvas 2D
 */

class PixelArtRenderer {
    constructor(ctx) {
        this.ctx = ctx;
        this.scale = 2; // Escala de pixel art
    }

    /**
     * Desenha um pixel na posição especificada
     */
    drawPixel(x, y, color, size = 1) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.scale, y * this.scale, size * this.scale, this.scale);
    }

    /**
     * Desenha o jogador do Flamengo (GRANDE com melhor definição)
     * Inspirado no Dino do Chrome - muito maior e mais detalhado
     * Estado: pulando ou correndo
     */
    drawPlayer(x, y, isJumping = false) {
        const offsetY = isJumping ? -15 : 0;
        const baseX = x;
        const baseY = y + offsetY;

        // ===== CABEÇA (Maior e redonda) =====
        const headX = baseX + 12;
        const headY = baseY;
        
        // Contorno da cabeça (preto)
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(headX + 8, headY + 12, 10, 0, Math.PI * 2);
        this.ctx.stroke();
        
        // Preenchimento cabeça (bege)
        this.ctx.fillStyle = '#d4a574';
        this.ctx.beginPath();
        this.ctx.arc(headX + 8, headY + 12, 9, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Cabelo (preto, cima da cabeça)
        this.ctx.fillStyle = '#000';
        for (let i = 0; i < 16; i++) {
            const px = headX + 8 + Math.cos((i / 16) * Math.PI * 2) * 9.5;
            const py = headY + 12 + Math.sin((i / 16) * Math.PI * 2) * 9.5;
            if (py < headY + 12) {
                this.ctx.fillRect(px - 1, py - 2, 2, 3);
            }
        }
        
        // Olhos
        this.ctx.fillStyle = '#000';
        this.ctx.beginPath();
        this.ctx.arc(headX + 4, headY + 10, 2, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(headX + 12, headY + 10, 2, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Brilho nos olhos
        this.ctx.fillStyle = '#fff';
        this.ctx.beginPath();
        this.ctx.arc(headX + 5, headY + 9, 1, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(headX + 13, headY + 9, 1, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Boca (simples)
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.arc(headX + 8, headY + 13, 2, 0, Math.PI);
        this.ctx.stroke();

        // ===== CORPO - CAMISA FLAMENGO =====
        const bodyX = baseX + 10;
        const bodyY = baseY + 20;
        const bodyW = 16;
        const bodyH = 24;
        
        // Contorno corpo (preto)
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 2;
        this.ctx.fillStyle = '#c41e3a';
        this.ctx.fillRect(bodyX, bodyY, bodyW, bodyH);
        this.ctx.strokeRect(bodyX, bodyY, bodyW, bodyH);
        
        // Listas vermelha e preta (listrado)
        this.ctx.fillStyle = '#000';
        for (let i = 0; i < 4; i++) {
            this.ctx.fillRect(bodyX + i * 4, bodyY, 2, bodyH);
        }
        
        // Botões/Detalhes da camisa
        this.ctx.fillStyle = '#fff';
        for (let i = 0; i < 3; i++) {
            this.ctx.beginPath();
            this.ctx.arc(bodyX + 8, bodyY + 6 + i * 6, 1.5, 0, Math.PI * 2);
            this.ctx.fill();
        }

        // ===== BRAÇOS =====
        // Braço esquerdo (bege)
        this.ctx.fillStyle = '#d4a574';
        this.ctx.fillRect(bodyX - 6, bodyY + 4, 6, 16);
        
        // Braço direito (bege)
        this.ctx.fillRect(bodyX + bodyW, bodyY + 4, 6, 16);
        
        // Contorno dos braços
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(bodyX - 6, bodyY + 4, 6, 16);
        this.ctx.strokeRect(bodyX + bodyW, bodyY + 4, 6, 16);

        // ===== CALÇÃO (Preto) =====
        const shortsX = bodyX + 2;
        const shortsY = bodyY + 20;
        const shortsW = 12;
        const shortsH = 8;
        
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(shortsX, shortsY, shortsW, shortsH);
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(shortsX, shortsY, shortsW, shortsH);
        
        // Detalhe no calção (branco)
        this.ctx.fillStyle = '#fff';
        this.ctx.fillRect(shortsX + 2, shortsY + 2, 8, 2);

        // ===== PERNAS =====
        const legW = 5;
        const legX1 = baseX + 12;
        const legX2 = baseX + 20;
        const legY = baseY + 50;
        const legH = 20;
        
        // Perna esquerda
        this.ctx.fillStyle = '#d4a574';
        this.ctx.fillRect(legX1, legY, legW, legH);
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(legX1, legY, legW, legH);
        
        // Perna direita (animada quando correndo)
        if (!isJumping) {
            const time = Date.now() % 400;
            const legOffset = time < 200 ? 0 : 3;
            this.ctx.fillStyle = '#d4a574';
            this.ctx.fillRect(legX2, legY + legOffset, legW, legH - legOffset);
            this.ctx.strokeStyle = '#000';
            this.ctx.lineWidth = 1;
            this.ctx.strokeRect(legX2, legY + legOffset, legW, legH - legOffset);
        } else {
            this.ctx.fillStyle = '#d4a574';
            this.ctx.fillRect(legX2, legY, legW, legH);
            this.ctx.strokeStyle = '#000';
            this.ctx.lineWidth = 1;
            this.ctx.strokeRect(legX2, legY, legW, legH);
        }

        // ===== CHUTEIRAS/PÉS (Preto) =====
        const footW = 6;
        const footH = 4;
        const footY = baseY + 70;
        
        // Pé esquerdo
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(legX1, footY, footW, footH);
        
        // Pé direito
        this.ctx.fillRect(legX2, footY, footW, footH);
        
        // Contorno dos pés
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(legX1, footY, footW, footH);
        this.ctx.strokeRect(legX2, footY, footW, footH);

        // Bola de futebol colada ao pé direito
        this.drawBall(legX2 + 8, footY + 2);
    }

    /**
     * Desenha um adversário (camisa verde, calção branco)
     * GRANDE com melhor definição - estilo Dino Chrome
     */
    drawEnemy(x, y) {
        const baseX = x;
        const baseY = y;

        // ===== CABEÇA (Maior e redonda) =====
        const headX = baseX + 12;
        const headY = baseY;
        
        // Contorno da cabeça (preto)
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(headX + 8, headY + 12, 10, 0, Math.PI * 2);
        this.ctx.stroke();
        
        // Preenchimento cabeça (bege)
        this.ctx.fillStyle = '#d4a574';
        this.ctx.beginPath();
        this.ctx.arc(headX + 8, headY + 12, 9, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Cabelo (preto, cima da cabeça)
        this.ctx.fillStyle = '#000';
        for (let i = 0; i < 16; i++) {
            const px = headX + 8 + Math.cos((i / 16) * Math.PI * 2) * 9.5;
            const py = headY + 12 + Math.sin((i / 16) * Math.PI * 2) * 9.5;
            if (py < headY + 12) {
                this.ctx.fillRect(px - 1, py - 2, 2, 3);
            }
        }
        
        // Olhos com raiva (rivais!)
        this.ctx.fillStyle = '#000';
        this.ctx.beginPath();
        this.ctx.arc(headX + 4, headY + 10, 2, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(headX + 12, headY + 10, 2, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Brilho nos olhos
        this.ctx.fillStyle = '#fff';
        this.ctx.beginPath();
        this.ctx.arc(headX + 4.5, headY + 9, 1, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(headX + 12.5, headY + 9, 1, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Boca com expressão agressiva (-)
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.moveTo(headX + 5, headY + 14);
        this.ctx.lineTo(headX + 11, headY + 14);
        this.ctx.stroke();

        // ===== CORPO - CAMISA VERDE =====
        const bodyX = baseX + 10;
        const bodyY = baseY + 20;
        const bodyW = 16;
        const bodyH = 24;
        
        // Contorno corpo
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 2;
        this.ctx.fillStyle = '#228B22';
        this.ctx.fillRect(bodyX, bodyY, bodyW, bodyH);
        this.ctx.strokeRect(bodyX, bodyY, bodyW, bodyH);
        
        // Detalhe de listra na camisa verde
        this.ctx.fillStyle = '#1a6b1a';
        for (let i = 0; i < 4; i++) {
            this.ctx.fillRect(bodyX + i * 4, bodyY, 1.5, bodyH);
        }
        
        // Botões/Números na camisa
        this.ctx.fillStyle = '#fff';
        this.ctx.font = 'bold 8px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('10', bodyX + 8, bodyY + 18);

        // ===== BRAÇOS =====
        // Braço esquerdo (bege)
        this.ctx.fillStyle = '#d4a574';
        this.ctx.fillRect(bodyX - 6, bodyY + 4, 6, 16);
        
        // Braço direito (bege)
        this.ctx.fillRect(bodyX + bodyW, bodyY + 4, 6, 16);
        
        // Contorno dos braços
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(bodyX - 6, bodyY + 4, 6, 16);
        this.ctx.strokeRect(bodyX + bodyW, bodyY + 4, 6, 16);

        // ===== CALÇÃO (Branco) =====
        const shortsX = bodyX + 2;
        const shortsY = bodyY + 20;
        const shortsW = 12;
        const shortsH = 8;
        
        this.ctx.fillStyle = '#fff';
        this.ctx.fillRect(shortsX, shortsY, shortsW, shortsH);
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(shortsX, shortsY, shortsW, shortsH);
        
        // Detalhe verde no calção
        this.ctx.fillStyle = '#228B22';
        this.ctx.fillRect(shortsX + 2, shortsY + 2, 8, 2);

        // ===== PERNAS =====
        const legW = 5;
        const legX1 = baseX + 12;
        const legX2 = baseX + 20;
        const legY = baseY + 50;
        const legH = 20;
        
        // Perna esquerda
        this.ctx.fillStyle = '#d4a574';
        this.ctx.fillRect(legX1, legY, legW, legH);
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(legX1, legY, legW, legH);
        
        // Perna direita (animada)
        const time = Date.now() % 400;
        const legOffset = time < 200 ? 0 : 3;
        this.ctx.fillStyle = '#d4a574';
        this.ctx.fillRect(legX2, legY + legOffset, legW, legH - legOffset);
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(legX2, legY + legOffset, legW, legH - legOffset);

        // ===== CHUTEIRAS/PÉS (Preto) =====
        const footW = 6;
        const footH = 4;
        const footY = baseY + 70;
        
        // Pé esquerdo
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(legX1, footY, footW, footH);
        
        // Pé direito
        this.ctx.fillRect(legX2, footY, footW, footH);
        
        // Contorno dos pés
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(legX1, footY, footW, footH);
        this.ctx.strokeRect(legX2, footY, footW, footH);
    }

    /**
     * Desenha um árbitro de futebol (camisa amarela, calção preto)
     */
    drawReferee(x, y) {
        const baseX = x;
        const baseY = y;

        // ===== CABEÇA (Maior e redonda) =====
        const headX = baseX + 12;
        const headY = baseY;
        
        // Contorno da cabeça (preto)
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(headX + 8, headY + 12, 10, 0, Math.PI * 2);
        this.ctx.stroke();
        
        // Preenchimento cabeça (bege)
        this.ctx.fillStyle = '#d4a574';
        this.ctx.beginPath();
        this.ctx.arc(headX + 8, headY + 12, 9, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Cabelo (preto, cima da cabeça)
        this.ctx.fillStyle = '#000';
        for (let i = 0; i < 16; i++) {
            const px = headX + 8 + Math.cos((i / 16) * Math.PI * 2) * 9.5;
            const py = headY + 12 + Math.sin((i / 16) * Math.PI * 2) * 9.5;
            if (py < headY + 12) {
                this.ctx.fillRect(px - 1, py - 2, 2, 3);
            }
        }
        
        // Olhos
        this.ctx.fillStyle = '#000';
        this.ctx.beginPath();
        this.ctx.arc(headX + 4, headY + 10, 2, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(headX + 12, headY + 10, 2, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Brilho nos olhos
        this.ctx.fillStyle = '#fff';
        this.ctx.beginPath();
        this.ctx.arc(headX + 4.5, headY + 9, 1, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(headX + 12.5, headY + 9, 1, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Boca neutra
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.moveTo(headX + 5, headY + 14);
        this.ctx.lineTo(headX + 11, headY + 14);
        this.ctx.stroke();

        // ===== CORPO - CAMISA AMARELA =====
        const bodyX = baseX + 10;
        const bodyY = baseY + 20;
        const bodyW = 16;
        const bodyH = 24;
        
        // Contorno corpo
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 2;
        this.ctx.fillStyle = '#ffff00';
        this.ctx.fillRect(bodyX, bodyY, bodyW, bodyH);
        this.ctx.strokeRect(bodyX, bodyY, bodyW, bodyH);
        
        // Detalhes de listras na camisa amarela
        this.ctx.fillStyle = '#e6e600';
        for (let i = 0; i < 4; i++) {
            this.ctx.fillRect(bodyX + i * 4, bodyY, 1.5, bodyH);
        }

        // ===== BRAÇOS (bege) =====
        this.ctx.fillStyle = '#d4a574';
        this.ctx.fillRect(bodyX - 6, bodyY + 4, 6, 16);
        this.ctx.fillRect(bodyX + bodyW, bodyY + 4, 6, 16);
        
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(bodyX - 6, bodyY + 4, 6, 16);
        this.ctx.strokeRect(bodyX + bodyW, bodyY + 4, 6, 16);

        // ===== CALÇÃO (Preto) =====
        const shortsX = bodyX + 2;
        const shortsY = bodyY + 20;
        const shortsW = 12;
        const shortsH = 8;
        
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(shortsX, shortsY, shortsW, shortsH);
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(shortsX, shortsY, shortsW, shortsH);
        
        // Detalhes amarelos no calção
        this.ctx.fillStyle = '#ffff00';
        this.ctx.fillRect(shortsX + 2, shortsY + 2, 8, 2);

        // ===== PERNAS =====
        const legW = 5;
        const legX1 = baseX + 12;
        const legX2 = baseX + 20;
        const legY = baseY + 50;
        const legH = 20;
        
        this.ctx.fillStyle = '#d4a574';
        this.ctx.fillRect(legX1, legY, legW, legH);
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(legX1, legY, legW, legH);
        
        const time = Date.now() % 400;
        const legOffset = time < 200 ? 0 : 3;
        this.ctx.fillStyle = '#d4a574';
        this.ctx.fillRect(legX2, legY + legOffset, legW, legH - legOffset);
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(legX2, legY + legOffset, legW, legH - legOffset);

        // ===== SAPATOS (Preto) =====
        const footW = 6;
        const footH = 4;
        const footY = baseY + 70;
        
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(legX1, footY, footW, footH);
        this.ctx.fillRect(legX2, footY, footW, footH);
        
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(legX1, footY, footW, footH);
        this.ctx.strokeRect(legX2, footY, footW, footH);
    }

    /**
     * Desenha um jornalista (com microfone na mão)
     */
    drawJournalist(x, y) {
        const baseX = x;
        const baseY = y;

        // ===== CABEÇA (Maior e redonda) =====
        const headX = baseX + 12;
        const headY = baseY;
        
        // Contorno da cabeça (preto)
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(headX + 8, headY + 12, 10, 0, Math.PI * 2);
        this.ctx.stroke();
        
        // Preenchimento cabeça (bege)
        this.ctx.fillStyle = '#d4a574';
        this.ctx.beginPath();
        this.ctx.arc(headX + 8, headY + 12, 9, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Cabelo castanho
        this.ctx.fillStyle = '#8B4513';
        for (let i = 0; i < 16; i++) {
            const px = headX + 8 + Math.cos((i / 16) * Math.PI * 2) * 9.5;
            const py = headY + 12 + Math.sin((i / 16) * Math.PI * 2) * 9.5;
            if (py < headY + 12) {
                this.ctx.fillRect(px - 1, py - 2, 2, 3);
            }
        }
        
        // Olhos
        this.ctx.fillStyle = '#000';
        this.ctx.beginPath();
        this.ctx.arc(headX + 4, headY + 10, 2, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(headX + 12, headY + 10, 2, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Brilho nos olhos
        this.ctx.fillStyle = '#fff';
        this.ctx.beginPath();
        this.ctx.arc(headX + 4.5, headY + 9, 1, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(headX + 12.5, headY + 9, 1, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Boca sorridente
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.arc(headX + 8, headY + 14, 2, 0, Math.PI, false);
        this.ctx.stroke();

        // ===== CORPO - CAMISA AZUL =====
        const bodyX = baseX + 10;
        const bodyY = baseY + 20;
        const bodyW = 16;
        const bodyH = 24;
        
        // Contorno corpo
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 2;
        this.ctx.fillStyle = '#0066ff';
        this.ctx.fillRect(bodyX, bodyY, bodyW, bodyH);
        this.ctx.strokeRect(bodyX, bodyY, bodyW, bodyH);
        
        // Detalhes na camisa azul
        this.ctx.fillStyle = '#0052cc';
        for (let i = 0; i < 4; i++) {
            this.ctx.fillRect(bodyX + i * 4, bodyY, 1.5, bodyH);
        }

        // ===== BRAÇOS (bege) =====
        this.ctx.fillStyle = '#d4a574';
        this.ctx.fillRect(bodyX - 6, bodyY + 4, 6, 16);
        this.ctx.fillRect(bodyX + bodyW, bodyY + 4, 6, 16);
        
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(bodyX - 6, bodyY + 4, 6, 16);
        this.ctx.strokeRect(bodyX + bodyW, bodyY + 4, 6, 16);

        // ===== CALÇÃO (Cinza) =====
        const shortsX = bodyX + 2;
        const shortsY = bodyY + 20;
        const shortsW = 12;
        const shortsH = 8;
        
        this.ctx.fillStyle = '#666';
        this.ctx.fillRect(shortsX, shortsY, shortsW, shortsH);
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(shortsX, shortsY, shortsW, shortsH);

        // ===== PERNAS =====
        const legW = 5;
        const legX1 = baseX + 12;
        const legX2 = baseX + 20;
        const legY = baseY + 50;
        const legH = 20;
        
        this.ctx.fillStyle = '#d4a574';
        this.ctx.fillRect(legX1, legY, legW, legH);
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(legX1, legY, legW, legH);
        
        const time = Date.now() % 400;
        const legOffset = time < 200 ? 0 : 3;
        this.ctx.fillStyle = '#d4a574';
        this.ctx.fillRect(legX2, legY + legOffset, legW, legH - legOffset);
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(legX2, legY + legOffset, legW, legH - legOffset);

        // ===== SAPATOS (Preto) =====
        const footW = 6;
        const footH = 4;
        const footY = baseY + 70;
        
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(legX1, footY, footW, footH);
        this.ctx.fillRect(legX2, footY, footW, footH);
        
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(legX1, footY, footW, footH);
        this.ctx.strokeRect(legX2, footY, footW, footH);

        // ===== MICROFONE (na mão direita) =====
        const micX = bodyX + bodyW + 6;
        const micY = bodyY + 8;
        
        // Cabo do microfone
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(micX, micY);
        this.ctx.lineTo(micX + 8, micY - 5);
        this.ctx.stroke();
        
        // Esfera do microfone
        this.ctx.fillStyle = '#666';
        this.ctx.beginPath();
        this.ctx.arc(micX + 8, micY - 5, 3, 0, Math.PI * 2);
        this.ctx.fill();
        
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.arc(micX + 8, micY - 5, 3, 0, Math.PI * 2);
        this.ctx.stroke();
        
        // Detalhe no microfone
        this.ctx.fillStyle = '#999';
        this.ctx.beginPath();
        this.ctx.arc(micX + 8, micY - 5, 1.5, 0, Math.PI * 2);
        this.ctx.fill();
    }

    /**
     * Desenha uma bola de futebol
     * Posicionada junto ao pé direito do jogador
     */
    drawBall(x, y) {
        // Corpo da bola - branco com padrão de pentágonos/hexágonos
        const ballRadius = 5;
        
        // Preenchimento branco
        this.ctx.fillStyle = '#ffffff';
        this.ctx.beginPath();
        this.ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Contorno preto
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
        this.ctx.stroke();
        
        // Padrão de pentágonos (estilo tradicional)
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 0.5;
        
        // Linha vertical central
        this.ctx.beginPath();
        this.ctx.moveTo(x, y - ballRadius);
        this.ctx.lineTo(x, y + ballRadius);
        this.ctx.stroke();
        
        // Linha horizontal
        this.ctx.beginPath();
        this.ctx.moveTo(x - ballRadius, y);
        this.ctx.lineTo(x + ballRadius, y);
        this.ctx.stroke();
        
        // Linhas diagonais para padrão
        this.ctx.beginPath();
        this.ctx.moveTo(x - 3.5, y - 3.5);
        this.ctx.lineTo(x + 3.5, y + 3.5);
        this.ctx.stroke();
        
        this.ctx.beginPath();
        this.ctx.moveTo(x - 3.5, y + 3.5);
        this.ctx.lineTo(x + 3.5, y - 3.5);
        this.ctx.stroke();
    }

    /**
     * Desenha partículas de colisão/impacto
     */
    drawCollisionEffect(x, y) {
        const colors = ['#ff0000', '#ffff00', '#ffffff', '#ff6600'];
        
        // Múltiplas partículas saindo do ponto de colisão
        for (let i = 0; i < 4; i++) {
            const angle = (i / 4) * Math.PI * 2;
            const dist = 15;
            const px = x + Math.cos(angle) * dist;
            const py = y + Math.sin(angle) * dist;
            
            this.ctx.fillStyle = colors[i];
            this.ctx.beginPath();
            this.ctx.arc(px, py, 4, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Contorno
            this.ctx.strokeStyle = '#000';
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
        }
        
        // Símbolos de impacto
        this.ctx.fillStyle = '#ff0000';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('X', x, y);
    }

    /**
     * Desenha a linha de meta (bandeira)
     */
    drawGoal(x, y) {
        // Mastro (madeira)
        this.ctx.fillStyle = '#8B4513';
        this.ctx.fillRect(x, y, 4, 60);
        this.ctx.strokeStyle = '#654321';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(x, y, 4, 60);

        // Base do mastro
        this.ctx.fillStyle = '#654321';
        this.ctx.fillRect(x - 8, y + 55, 20, 5);

        // Bandeira vermelha e preta (Flamengo) - MAIOR
        const flagX = x + 6;
        const flagY = y;
        const flagW = 25;
        const flagH = 18;
        
        // Metade vermelha
        this.ctx.fillStyle = '#c41e3a';
        this.ctx.fillRect(flagX, flagY, flagW / 2, flagH);
        
        // Metade preta
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(flagX + flagW / 2, flagY, flagW / 2, flagH);
        
        // Contorno
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(flagX, flagY, flagW, flagH);
        
        // Sombra/profundidade
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        this.ctx.fillRect(flagX + flagW / 2, flagY, 2, flagH);
    }

    /**
     * Desenha troféu (bônus de pontos) - MAIOR
     */
    drawTrophy(x, y) {
        const baseX = x;
        const baseY = y;

        // ===== TAÇA (Parte superior) =====
        // Contorno da taça
        this.ctx.strokeStyle = '#FFD700';
        this.ctx.lineWidth = 2;
        this.ctx.fillStyle = '#FFA500';
        
        // Desenhar a taça (formato de U)
        this.ctx.beginPath();
        this.ctx.arc(baseX + 7, baseY + 5, 6, 0, Math.PI, true); // Topo semicircular
        this.ctx.lineTo(baseX + 1, baseY + 5);
        this.ctx.arc(baseX + 7, baseY + 5, 6, Math.PI, Math.PI * 2, true);
        this.ctx.lineTo(baseX + 13, baseY + 5);
        this.ctx.fill();
        this.ctx.stroke();

        // Alça esquerda da taça
        this.ctx.beginPath();
        this.ctx.arc(baseX - 1, baseY + 7, 4, 0, Math.PI * 2);
        this.ctx.strokeStyle = '#FFD700';
        this.ctx.lineWidth = 1.5;
        this.ctx.stroke();

        // Alça direita da taça
        this.ctx.beginPath();
        this.ctx.arc(baseX + 15, baseY + 7, 4, 0, Math.PI * 2);
        this.ctx.stroke();

        // ===== PEDESTAL (Base) =====
        // Corpo do pedestal (retângulo fino)
        this.ctx.fillStyle = '#FFD700';
        this.ctx.fillRect(baseX + 5, baseY + 11, 4, 4);
        this.ctx.strokeStyle = '#DAA520';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(baseX + 5, baseY + 11, 4, 4);

        // Base do troféu (mais larga)
        this.ctx.fillStyle = '#FFD700';
        this.ctx.fillRect(baseX + 3, baseY + 15, 8, 3);
        this.ctx.strokeStyle = '#DAA520';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(baseX + 3, baseY + 15, 8, 3);

        // Brilho no topo da taça
        this.ctx.fillStyle = 'rgba(255, 255, 200, 0.8)';
        this.ctx.beginPath();
        this.ctx.arc(baseX + 5, baseY + 3, 2, 0, Math.PI * 2);
        this.ctx.fill();

        // Animação pulsante
        const pulse = Math.sin(Date.now() / 300) * 0.5 + 1;
        this.ctx.strokeStyle = 'rgba(255, 215, 0, 0.6)';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.arc(baseX + 7, baseY + 8, 8 + pulse, 0, Math.PI * 2);
        this.ctx.stroke();
    }

    /**
     * Desenha o fundo estilo Super Nintendo
     */
    drawBackground(ctx, width, height, scrollOffset = 0) {
        // Céu gradiente
        const skyGradient = ctx.createLinearGradient(0, 0, 0, height * 0.5);
        skyGradient.addColorStop(0, '#87CEEB');
        skyGradient.addColorStop(1, '#E0F6FF');
        ctx.fillStyle = skyGradient;
        ctx.fillRect(0, 0, width, height * 0.5);

        // Torcida desfocada (padrão simples)
        ctx.fillStyle = 'rgba(139, 0, 0, 0.3)';
        for (let i = 0; i < width; i += 30) {
            ctx.fillRect((i - scrollOffset % 60) % width, height * 0.15, 20, 15);
        }

        // Gramado
        const grassGradient = ctx.createLinearGradient(0, height * 0.5, 0, height);
        grassGradient.addColorStop(0, '#90EE90');
        grassGradient.addColorStop(0.7, '#228B22');
        grassGradient.addColorStop(1, '#1a6b1a');
        ctx.fillStyle = grassGradient;
        ctx.fillRect(0, height * 0.5, width, height * 0.5);

        // Linhas do gramado (para criar efeito de movimento)
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 2;
        for (let i = -100; i < width + 100; i += 100) {
            ctx.beginPath();
            ctx.moveTo((i - scrollOffset % 100), height * 0.5);
            ctx.lineTo((i - scrollOffset % 100), height);
            ctx.stroke();
        }

        // Padrão de grama (pixel by pixel para efeito retro)
        ctx.fillStyle = 'rgba(139, 69, 19, 0.1)';
        for (let i = 0; i < width; i += 10) {
            for (let j = height * 0.5; j < height; j += 10) {
                if ((i + j) % 20 === 0) {
                    ctx.fillRect(i, j, 5, 5);
                }
            }
        }
    }

    /**
     * Desenha indicador visual de colisão iminente
     */
    drawWarning(x, y) {
        // Triângulo de aviso
        this.ctx.fillStyle = '#ffff00';
        this.ctx.beginPath();
        this.ctx.moveTo(x, y - 10);
        this.ctx.lineTo(x - 10, y + 10);
        this.ctx.lineTo(x + 10, y + 10);
        this.ctx.closePath();
        this.ctx.fill();

        // Ponto de exclamação
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('!', x, y + 2);
    }
}

/**
 * Gerador de sons usando Web Audio API
 */
class SoundGenerator {
    constructor() {
        this.audioContext = null;
        this.masterVolume = 0.3;
        this.initAudioContext();
    }

    initAudioContext() {
        if (!window.AudioContext && !window.webkitAudioContext) {
            console.warn('Web Audio API não suportado');
            return;
        }
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    /**
     * Toca som de pulo
     */
    playJump() {
        if (!this.audioContext) return;
        
        const now = this.audioContext.currentTime;
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(200, now + 0.1);
        
        gain.gain.setValueAtTime(this.masterVolume, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);

        osc.connect(gain);
        gain.connect(this.audioContext.destination);

        osc.start(now);
        osc.stop(now + 0.1);
    }

    /**
     * Toca som de colisão
     */
    playCollision() {
        if (!this.audioContext) return;
        
        const now = this.audioContext.currentTime;
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, now);
        osc.frequency.exponentialRampToValueAtTime(50, now + 0.2);
        
        gain.gain.setValueAtTime(this.masterVolume * 0.8, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);

        osc.connect(gain);
        gain.connect(this.audioContext.destination);

        osc.start(now);
        osc.stop(now + 0.2);
    }

    /**
     * Toca som de pontuação
     */
    playPoint() {
        if (!this.audioContext) return;
        
        const now = this.audioContext.currentTime;
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.setValueAtTime(1000, now + 0.05);
        
        gain.gain.setValueAtTime(this.masterVolume * 0.6, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);

        osc.connect(gain);
        gain.connect(this.audioContext.destination);

        osc.start(now);
        osc.stop(now + 0.2);
    }

    /**
     * Toca som de vitória
     */
    playVictory() {
        if (!this.audioContext) return;
        
        const now = this.audioContext.currentTime;
        const notes = [800, 1000, 1200, 1400];
        
        notes.forEach((freq, i) => {
            const osc = this.audioContext.createOscillator();
            const gain = this.audioContext.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + i * 0.15);
            
            gain.gain.setValueAtTime(this.masterVolume * 0.5, now + i * 0.15);
            gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.15 + 0.2);

            osc.connect(gain);
            gain.connect(this.audioContext.destination);

            osc.start(now + i * 0.15);
            osc.stop(now + i * 0.15 + 0.2);
        });
    }
}
