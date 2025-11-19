<!-- Este arquivo explica como o projeto está estruturado no GitHub -->

# 🚀 Iniciando com Mengão Run

## Estrutura do Repositório

```
mengao-run/
├── 📄 index.html              # Arquivo principal (meta tags, canvas)
├── 🎨 style.css               # Estilos e responsividade
├── 🎮 game.js                 # Engine do jogo
├── 🖼️ pixelArt.js             # Gráficos e sons
│
├── 📁 .github/
│   └── workflows/
│       └── validate.yml       # CI/CD do GitHub Actions
│
├── 🔍 SEO e Indexação:
│   ├── sitemap.xml            # Mapa do site para Google
│   ├── robots.txt             # Instruções para crawlers
│   ├── schema.json            # Dados estruturados
│   └── .htaccess              # Config Apache
│
├── 📝 Documentação:
│   ├── README-GITHUB.md       # Para o repositório
│   ├── README.md              # Documentação completa
│   ├── DEPLOY.md              # Guia de deployment
│   ├── SEO.md                 # Guia de SEO
│   └── GITHUB-CHECKLIST.md    # Checklist de deploy
│
├── ⚙️ Configuração:
│   ├── vercel.json            # Config do Vercel
│   ├── .gitignore             # Arquivos a ignorar
│   ├── .gitattributes         # Padrão de line endings
│   └── LICENSE                # MIT License
│
└── 📊 Metadados:
    └── package.json (opcional) # Se usar Node.js tools
```

## 🎯 Arquivos para Deploy

**Essenciais (sempre incluir):**
- ✅ index.html
- ✅ style.css
- ✅ game.js
- ✅ pixelArt.js

**SEO (recomendado):**
- ✅ sitemap.xml
- ✅ robots.txt
- ✅ schema.json

**Configuração:**
- ✅ vercel.json (para Vercel)
- ✅ .htaccess (para Apache)

**Ignorados pelo Git:**
- ❌ node_modules/ (se tiver)
- ❌ .DS_Store, Thumbs.db
- ❌ .env
- ❌ Arquivos temporários

## 🏃 Quick Start

### 1. Clonar localmente
```bash
git clone https://github.com/seu-usuario/mengao-run.git
cd mengao-run
```

### 2. Testar localmente
```bash
# Windows PowerShell
python -m http.server 8000

# ou Node.js
npx http-server

# Abrir browser
Start-Process "http://localhost:8000"
```

### 3. Fazer mudanças (exemplo)
```bash
# Editar arquivo
notepad index.html

# Commit
git add .
git commit -m "Update: descrição da mudança"

# Push
git push origin main
```

### 4. Deploy automático
- **Vercel**: Deploy acontece automaticamente quando você faz push
- **GitHub Pages**: Deploy automático em ~2 minutos
- **Netlify**: Deploy automático quando você faz push

## 📦 Dependências

**ZERO dependências externas!**

O projeto usa apenas APIs nativas do navegador:
- ✅ Canvas 2D API
- ✅ Web Audio API
- ✅ localStorage
- ✅ Fetch API

Nenhuma biblioteca externa necessária!

## 🔐 Variáveis de Ambiente

Não há necessidade de variáveis de ambiente. O projeto é totalmente standalone.

Se no futuro adicionar Google Analytics, use:
```html
<!-- Editar index.html com seu GA_ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

## 🐛 Debugging

### Console Browser (F12)

```javascript
// Ver high score
localStorage.getItem('mengaoRunHighScore')

// Limpar high score
localStorage.removeItem('mengaoRunHighScore')

// Ver logs do jogo (se houver)
console.log('Seu log aqui')
```

### Teste de Performance

```powershell
# Lighthouse (Chrome DevTools)
# F12 > Lighthouse > Generate report

# Esperar score:
# Performance: > 90
# Accessibility: > 90
# Best Practices: > 90
# SEO: > 90
```

## 🚀 Platafomas Testadas

| Plataforma | Status | Notes |
|------------|--------|-------|
| Chrome | ✅ | Recomendado |
| Firefox | ✅ | Excelente |
| Safari | ✅ | Funciona |
| Edge | ✅ | Compatível |
| Opera | ✅ | Compatível |

## 📱 Mobile

- ✅ iPhone (Safari)
- ✅ Android (Chrome)
- ✅ Tablets
- ⚠️ Requer landscape (aviso em portrait)

## 🎨 Customizar

### Cores do Flamengo

```css
/* Em style.css */
--flamengo-red: #c41e3a;
--flamengo-black: #000000;
--flamengo-yellow: #ffff00;
```

### Dificuldade

```javascript
// Em game.js - modificar spawnMultipleEnemies()
const difficulttyMultiplier = 1.5; // aumentar para mais difícil
```

## 🤝 Contribuições

1. Fork o projeto
2. Crie branch (`git checkout -b feature/nova-feature`)
3. Commit (`git commit -m 'Add nova feature'`)
4. Push (`git push origin feature/nova-feature`)
5. Open Pull Request

## ⚡ Performance

Tamanho total do projeto (sem node_modules):
- index.html: ~5 KB
- style.css: ~20 KB
- game.js: ~25 KB
- pixelArt.js: ~30 KB
- **Total: ~80 KB**

Tempo de carregamento: <1s (em conexão 4G)

## 📊 Estatísticas do Código

- Linhas de HTML: ~135
- Linhas de CSS: ~580
- Linhas de JavaScript: ~1200
- **Total: ~1900 linhas**

## 🎓 Aprender

### JavaScript Canvas
- [MDN Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Canvas Tutorial](https://www.w3schools.com/graphics/canvas_intro.asp)

### Web Audio API
- [MDN Web Audio](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

### Game Development
- [Game Programming Patterns](https://gameprogrammingpatterns.com/)

## 🔗 Links Úteis

- [GitHub](https://github.com/seu-usuario/mengao-run)
- [Deploy Live](https://seu-projeto.vercel.app)
- [Google Search Console](https://search.google.com/search-console)
- [Vercel Dashboard](https://vercel.com/dashboard)

## 💬 Suporte

- 📝 Issues: GitHub Issues
- 💌 Email: seu-email@example.com
- 🐦 Twitter: @seu-usuario

## 📄 Licença

MIT - Veja [LICENSE](LICENSE)

---

**Vamo Flamengo!** 🔴⚫⚽

*Última atualização: 19 de novembro de 2025*
