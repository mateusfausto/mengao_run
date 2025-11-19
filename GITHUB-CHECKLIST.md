# 📋 Checklist de Deploy no GitHub

## ✅ Preparação Local

- [ ] Todos os arquivos necessários estão no projeto:
  - [ ] `index.html`
  - [ ] `style.css`
  - [ ] `game.js`
  - [ ] `pixelArt.js`
  - [ ] `sitemap.xml`
  - [ ] `robots.txt`
  - [ ] `.htaccess`

- [ ] Arquivos de configuração criados:
  - [ ] `.gitignore`
  - [ ] `.gitattributes`
  - [ ] `vercel.json`
  - [ ] `LICENSE`
  - [ ] `README-GITHUB.md`

- [ ] Testes no navegador:
  - [ ] Jogo funciona em http://localhost:8000
  - [ ] Chrome ✅
  - [ ] Firefox ✅
  - [ ] Safari ✅ (se tiver Mac)
  - [ ] Edge ✅

- [ ] Responsividade:
  - [ ] Desktop 1920x1080 ✅
  - [ ] Tablet 768x1024 ✅
  - [ ] Mobile Landscape (necessário) ✅
  - [ ] Mobile Portrait mostra aviso ✅

- [ ] Funcionalidades:
  - [ ] Som funciona ✅
  - [ ] Teclado (espaço/seta) ✅
  - [ ] Mouse/Touch ✅
  - [ ] High score salvo em localStorage ✅
  - [ ] Botões funcionam ✅

## 🔧 Configuração do GitHub

### Passo 1: Criar repositório

```bash
# No GitHub.com:
# 1. Clique em "New repository"
# 2. Nome: mengao-run
# 3. Descrição: "Jogo de corrida infinita com tema Flamengo"
# 4. Public
# 5. Não adicione README, .gitignore ou LICENSE (já temos)
# 6. Clique em "Create repository"
```

### Passo 2: Conectar repositório local

```powershell
# Windows PowerShell - na pasta c:\workspace\mengao_run

# Inicializar git
git init

# Adicionar remote
git remote add origin https://github.com/SEU-USUARIO/mengao-run.git

# Verificar remote
git remote -v
```

### Passo 3: Configurar Git (primeira vez)

```powershell
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"
```

### Passo 4: Fazer o primeiro commit

```powershell
# Adicionar todos os arquivos
git add .

# Criar commit
git commit -m "Initial commit: Mengão Run game"

# Push para GitHub
git branch -M main
git push -u origin main
```

## 🚀 Deploy Automático

### Opção 1: Vercel (Recomendado - 5 minutos)

- [ ] Acesse [vercel.com](https://vercel.com)
- [ ] Clique em "New Project"
- [ ] Faça login com GitHub
- [ ] Autorize Vercel
- [ ] Selecione "mengao-run"
- [ ] Configure (não precisa, já temos vercel.json)
- [ ] Clique em "Deploy"
- [ ] Espere terminar
- [ ] Copie a URL (ex: https://mengao-run.vercel.app)

### Opção 2: GitHub Pages (10 minutos)

- [ ] Vá para Settings do repositório
- [ ] Clique em "Pages"
- [ ] Source: "Deploy from a branch"
- [ ] Branch: "main"
- [ ] Folder: "/ (root)"
- [ ] Clique em "Save"
- [ ] Espere a página azul desaparecer
- [ ] Copie a URL (ex: https://seu-usuario.github.io/mengao-run/)

### Opção 3: Netlify (10 minutos)

- [ ] Acesse [netlify.com](https://netlify.com)
- [ ] Faça login com GitHub
- [ ] Clique em "New site from Git"
- [ ] Autorize Netlify
- [ ] Selecione "mengao-run"
- [ ] Deploy automático
- [ ] Copie a URL gerada

## 📝 Atualizar URLs

Após ter a URL final, atualize os arquivos:

- [ ] `index.html`: Atualize `og:url` e `url` no JSON-LD
- [ ] `sitemap.xml`: Atualize URL base
- [ ] `robots.txt`: Atualize sitemap URL
- [ ] `vercel.json`: Se necessário adicionar domínio personalizado
- [ ] `README-GITHUB.md`: Atualize links "Jogar Agora" e "Demo"
- [ ] `schema.json`: Atualize URL

```powershell
# Fazer novo commit com as URLs atualizadas
git add .
git commit -m "Update URLs for production"
git push
```

## 🔍 Verificações SEO

- [ ] Google Search Console:
  - [ ] Adicionar propriedade (seu-site.com)
  - [ ] Enviar sitemap.xml
  - [ ] Verificar cobertura

- [ ] Google PageSpeed Insights:
  - [ ] Testar em https://pagespeed.web.dev/
  - [ ] Score Mobile > 90
  - [ ] Score Desktop > 95

- [ ] Lighthouse (DevTools):
  - [ ] Performance > 90
  - [ ] Accessibility > 90
  - [ ] Best Practices > 90
  - [ ] SEO > 90

## 📱 Testar em Produção

Depois de fazer deploy, teste:

- [ ] Acesse a URL final no navegador
- [ ] Chrome Desktop ✅
- [ ] Firefox Desktop ✅
- [ ] Mobile Chrome (Android) ✅
- [ ] Mobile Safari (iPhone) ✅
- [ ] Som funciona ✅
- [ ] Controles funcionam ✅
- [ ] High score salvo ✅

## 🎯 Próximos Passos

- [ ] Compartilhar no Twitter
- [ ] Compartilhar no Reddit (r/gaming, r/flamengo)
- [ ] Enviar para diretórios de games
- [ ] Mencionar em comunidades de desenvolvimento
- [ ] Pedir reviews em fóruns de casual games

## 📊 Monitoramento

- [ ] Configurar Google Analytics (opcional)
- [ ] Monitorar Google Search Console
- [ ] Checar estatísticas de deploy (Vercel/Netlify)
- [ ] Acompanhar posição em buscas

## ⚠️ Troubleshooting

### Erro "fatal: not a git repository"

```powershell
cd C:\workspace\mengao_run
git init
git remote add origin https://github.com/seu-usuario/mengao-run.git
```

### Erro de autenticação

```powershell
# Se der erro de autenticação:
# 1. Vá em https://github.com/settings/tokens
# 2. Gere novo token
# 3. Use: git clone https://[token]@github.com/seu-usuario/mengao-run.git
```

### Deploy não atualiza

```powershell
# Force redeploy:
# Vercel: Clique em "Deployments" > último > clique 3 pontinhos > "Redeploy"
# Netlify: Settings > Build & Deploy > "Trigger deploy"
# GitHub Pages: Espere 2-5 minutos ou force refresh (Ctrl+Shift+Del)
```

---

## 🎉 Parabéns!

Se chegou até aqui, seu jogo está no ar! Compartilhe com amigos e se diverta! 

**Vamo Flamengo!** 🔴⚫⚽

---

*Última atualização: 19 de novembro de 2025*
