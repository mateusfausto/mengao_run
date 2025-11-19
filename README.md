# 🔴⚫ MENGÃO RUN - Jogo de Corrida Infinita ⚫🔴

Um jogo de corrida infinita grátis com tema do Flamengo, desenvolvido com HTML5, CSS3 e JavaScript puro. Inspirado no clássico Chrome Dino Game com gráficos em pixel art estilo Super Nintendo.

## 🎮 Sobre o Jogo

**Mengão Run** é um jogo casual infinito onde você controla um jogador do Flamengo que precisa:
- ✓ Desviar de adversários
- ✓ Coletar **troféus** pulando
- ✓ Atingir a **meta de 5000 metros** para vencer
- ✓ Acumular pontos com **multiplicador progressivo**

### Características

- 🎨 **Gráficos em Pixel Art** - Estilo Super Nintendo 16-bit
- 🎵 **Som Procedural** - Gerado dinamicamente via Web Audio API
- 📱 **Totalmente Responsivo** - Desktop, tablet e mobile
- ⌨️ **Controles Intuitivos** - Teclado, touch ou clique
- 🏆 **Sistema de Pontuação** - Com multiplicador dinâmico
- 🎯 **Dificuldade Progressiva** - Múltiplos inimigos conforme progresso
- 🌍 **Sem Dependências** - Código 100% vanilla JavaScript
- 🔴⚫ **Tema Flamengo** - Personagens com cores e estilos únicos

## 🕹️ Como Jogar

1. **Abra o jogo** no navegador
2. **Pressione ESPAÇO**, **SETA PARA CIMA** ou **clique/toque** para pular
3. **Desvie dos adversários** (verde, amarelo e azul)
4. **Colete troféus** pulando sobre eles
5. **Alcance 5000m** para vencer
6. **Aumente seu multiplicador** coletando troféus

## 📊 Sistema de Pontuação

| Ação | Pontos |
|------|--------|
| Passar por um adversário | 10 × multiplicador |
| Coletar um troféu | 50 × multiplicador |
| Vencer (atingir 5000m) | 500 × multiplicador |

## 🎯 Dificuldade Progressiva

- **Fase 1** (0-15 adversários): 70% chance de 1 inimigo, 30% de 2
- **Fase 2** (15-30 adversários): 40% chance de 1 inimigo, 60% de 2  
- **Fase 3** (30+ adversários): 40% chance de 2 inimigos, 60% de 3

A velocidade aumenta conforme o progresso e novos níveis trazem metas maiores.


## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semantic, Canvas API
- **CSS3**: Flexbox, Grid, Media Queries, Animações
- **JavaScript**: ES6+, Classes, requestAnimationFrame
- **Web Audio API**: Sons procedurais
- **Canvas API**: Renderização 2D

## 📱 Responsividade

- ✓ Desktop (1024px+)
- ✓ Tablet (768px - 1023px)
- ✓ Mobile retrato (aviso para rotacionar)
- ✓ Mobile paisagem (otimizado)
- ✓ iPhone em paisagem especial

## 🐛 Troubleshooting

### Sons não funcionam
→ Alguns navegadores bloqueiam áudio autoplay. Usuário deve interagir primeiro.

### Performance baixa
→ Desativar extensões, fechar abas, testar em outro navegador.

### Controles não respondem
→ Clicar no canvas antes de usar teclado, limpar localStorage.

## 📝 Licença

Desenvolvido com ❤️ para fãs do Flamengo.

## 🤝 Suporte

Encontrou algum problema? Sinta-se livre para reportar issues ou enviar sugestões!

---

**Vamo Flamengo! 🔴⚫**


- **JavaScript (ES6)**: Lógica do jogo orientada a objetos
- **Canvas 2D API**: Renderização de gráficos
- **Web Audio API**: Geração procedural de sons

## 🔊 Sistema de Som

O jogo utiliza Web Audio API para gerar sons dinamicamente:

- **Pulo**: Tom de 600Hz decrescendo para 200Hz
- **Colisão**: Tom de serra de 200Hz decrescendo para 50Hz
- **Pontuação**: Sequência de tons harmoniosos
- **Vitória**: Escala ascendente de 4 notas

## 📊 Métricas de Dificuldade

A dificuldade aumenta automaticamente:

- Velocidade dos adversários aumenta a cada 5 desviados
- Taxa de spawn de adversários diminui (mais frequência)
- Multiplicador cresce conforme você coleta bônus
- Cada nível (após vitória) aumenta a velocidade base

## 💾 Persistência

O jogo salva seu recorde no `localStorage`:
- Chave: `mengaoRunHighScore`
- Atualizado automaticamente quando você ultrapassa a pontuação anterior

## 📱 Responsividade

O jogo é otimizado para diferentes tamanhos de tela:
- Desktop (recomendado)
- Tablet (suportado)
- Mobile (suportado com ajustes CSS)

## 🐛 Requisitos do Navegador

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Funcionalidade completa com suporte a:
- Canvas 2D
- Web Audio API
- localStorage
- ES6 JavaScript


## 📝 Notas de Desenvolvimento

### Performance:
- Usado `requestAnimationFrame` para 60 FPS
- Otimização de colisões com AABB (Axis-Aligned Bounding Box)
- Limpeza de objetos fora da tela para economizar memória


## 🔗 Recursos

- [Canvas API MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Web Audio API MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [Pixel Art Tutorial](https://en.wikipedia.org/wiki/Pixel_art)


Vamo Flamengo! 🔴⚫
