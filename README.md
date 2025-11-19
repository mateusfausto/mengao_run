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

## 👥 Tipos de Adversários

| Tipo | Descrição | Cor |
|------|-----------|-----|
| **Jogador Rival** | Camisa verde com detalhe de bola | Verde #228B22 |
| **Árbitro** | Camisa amarela, calção preto | Amarela #FFFF00 |
| **Jornalista** | Camisa azul, microfone na mão | Azul #0066FF |

## 🎯 Dificuldade Progressiva

- **Fase 1** (0-15 adversários): 70% chance de 1 inimigo, 30% de 2
- **Fase 2** (15-30 adversários): 40% chance de 1 inimigo, 60% de 2  
- **Fase 3** (30+ adversários): 40% chance de 2 inimigos, 60% de 3

A velocidade aumenta conforme o progresso e novos níveis trazem metas maiores.

## 📁 Estrutura de Arquivos

```
mengao_run/
├── index.html          # HTML com meta tags SEO
├── style.css           # Estilos responsivos
├── game.js             # Lógica do jogo
├── pixelArt.js         # Renderização Canvas
├── sitemap.xml         # Mapa do site
├── robots.txt          # Configuração para crawlers
├── schema.json         # Structured data JSON-LD
├── .htaccess           # Configuração Apache
└── README.md           # Este arquivo
```

## 🌐 SEO e Otimização

### Meta Tags Implementadas

✓ Meta descrição otimizada  
✓ Keywords relevantes  
✓ Open Graph (Facebook, LinkedIn)  
✓ Twitter Card  
✓ Canonical URL  
✓ JSON-LD Structured Data  
✓ Favicon emoji  

### Otimizações Implementadas

1. **Performance**
   - Compressão GZIP
   - Cache do navegador inteligente
   - Image rendering otimizado

2. **Segurança**
   - HTTPS obrigatório
   - Headers de segurança
   - Política de segurança de conteúdo

3. **Indexação**
   - Sitemap.xml configurado
   - Robots.txt otimizado
   - Structured data JSON-LD
   - Schema.org markup

## 🚀 Deploy Rápido

### GitHub Pages (Recomendado)
```bash
git push origin main
# Ativar em Settings > Pages > main branch
# URL: https://seu-usuario.github.io/mengao-run
```

### Vercel
```bash
# Conectar repositório GitHub
# Deploy automático ao fazer push
```

### Netlify
```bash
# Conectar repositório GitHub
# Deploy contínuo
```

### Servidor Apache
- Copiar `.htaccess` para raiz
- Ativar mod_rewrite e mod_deflate

## 🔍 Otimizações para Produção

1. **Atualizar URLs**
   - schema.json: substituir `seu-site.com`
   - sitemap.xml: adicionar URLs reais
   - robots.txt: configurar domínio

2. **Adicionar imagens de preview**
   - OG Image: 1200x630px
   - Screenshot: 800x600px

3. **Google Analytics**
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
   ```

4. **Google Search Console**
   - Enviar sitemap.xml
   - Verificar indexação
   - Monitorar erros

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

## 🎨 Cores e Design

```css
Vermelho Flamengo:  #c41e3a
Amarelo:            #ffff00
Verde Grama:        #228B22
Azul Jornalista:    #0066ff
Preto:              #000000
Bege Pele:          #d4a574
```

## 📈 Checklist de Publicação

- [ ] Atualizar URLs em schema.json, sitemap.xml, robots.txt
- [ ] Adicionar imagens de preview (OG)
- [ ] Testar em múltiplos navegadores
- [ ] Validar HTML/CSS com W3C
- [ ] Google PageSpeed Insights > 90
- [ ] Submeter sitemap ao Google Search Console
- [ ] Configurar analytics
- [ ] Testar som em todos os navegadores
- [ ] Testar responsividade mobile
- [ ] Testar controles (teclado, touch, mouse)

## 🐛 Troubleshooting

### Sons não funcionam
→ Alguns navegadores bloqueiam áudio autoplay. Usuário deve interagir primeiro.

### Performance baixa
→ Desativar extensões, fechar abas, testar em outro navegador.

### Controles não respondem
→ Clicar no canvas antes de usar teclado, limpar localStorage.

## 📊 Estatísticas do Projeto

- **Linhas de código**: 1500+
- **Arquivos principais**: 4 (HTML, CSS, 2x JS)
- **Tamanho total**: ~50KB (não minificado)
- **Tamanho gzip**: ~15KB
- **Compatibilidade**: Chrome, Firefox, Safari, Edge
- **Suporte mobile**: iOS, Android, Windows Phone

## 🔗 Links Úteis

- [Chrome Dino Game](https://chromedino.com/) - Inspiração
- [Canvas API MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [Schema.org](https://schema.org/) - Structured Data

## 📝 Licença

Desenvolvido com ❤️ para fãs do Flamengo.

## 🤝 Suporte

Encontrou algum problema? Sinta-se livre para reportar issues ou enviar sugestões!

---

**Vamo Flamengo! 🔴⚫**


- **JavaScript (ES6)**: Lógica do jogo orientada a objetos
- **Canvas 2D API**: Renderização de gráficos
- **Web Audio API**: Geração procedural de sons

## 🎨 Design de Pixel Art

Todos os sprites são desenhados pixel-by-pixel usando Canvas 2D:

### Personagem Principal (Flamengo):
- Camisa listrada em vermelho e preto
- Calção preto
- Animação de corrida com movimento de pernas

### Adversários:
- Camisa verde
- Calção branco
- Mesma animação de movimento

### Elementos:
- Fundo com céu, torcida e gramado
- Estrelas (bônus)
- Bandeira de meta (cores do Flamengo)

## 🔊 Sistema de Som

O jogo utiliza Web Audio API para gerar sons dinamicamente:

- **Pulo**: Tom de 600Hz decrescendo para 200Hz
- **Colisão**: Tom de serra de 200Hz decrescendo para 50Hz
- **Pontuação**: Sequência de tons harmoniosos
- **Vitória**: Escala ascendente de 4 notas

## 📊 Métricas de Dificuldade

A dificuldade aumenta automaticamente:

- Velocidade dos inimigos aumenta a cada 5 inimigos desvitados
- Taxa de spawn de inimigos diminui (mais frequência)
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

## ⚙️ Instalação e Uso

### Local:
1. Clone ou baixe os arquivos do projeto
2. Abra `index.html` em um navegador moderno
3. Comece a jogar!

### Online:
- Deploy em plataformas como:
  - GitHub Pages
  - Vercel
  - Netlify
  - Replit

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

## 🎯 Futuras Melhorias

Ideias para expansão do jogo:

- [ ] Power-ups especiais (escudo, velocidade)
- [ ] Diferentes tipos de adversários com padrões distintos
- [ ] Cenários variados (dia/noite, chuva)
- [ ] Leaderboard online
- [ ] Modo multijogador local
- [ ] Efeitos visuais adicionais (partículas)
- [ ] Skin alternativas do jogador
- [ ] Achievements/Conquistas

## 📝 Notas de Desenvolvimento

### Performance:
- Usado `requestAnimationFrame` para 60 FPS
- Otimização de colisões com AABB (Axis-Aligned Bounding Box)
- Limpeza de objetos fora da tela para economizar memória

### Código:
- Orientado a objetos com classes ES6
- Bem documentado com comentários
- Estrutura modular e reutilizável
- Sem dependências externas

## 🔗 Recursos

- [Canvas API MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Web Audio API MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [Pixel Art Tutorial](https://en.wikipedia.org/wiki/Pixel_art)

## 📄 Licença

Projeto livre para uso educacional e pessoal.

---

**Desenvolvido com ❤️ para os torcedores do Mengão!**

Vamo Flamengo! 🔴⚫
