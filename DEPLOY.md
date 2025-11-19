# 🚀 Guia de Deploy - Mengão Run

Este arquivo contém instruções para hospedar o jogo em diferentes plataformas.

## 📋 Pré-requisitos

- Arquivos do projeto (index.html, style.css, game.js, pixelArt.js)
- Conta em uma plataforma de hosting (opcional, depende do método)

## 🌐 Opções de Hosting

### 1. GitHub Pages (Recomendado - Gratuito)

#### Passos:

1. **Criar repositório no GitHub**
   - Acesse [github.com](https://github.com)
   - Clique em "New repository"
   - Nome: `mengao-run` (ou escolha outro nome)
   - Deixe como public
   - Clique em "Create repository"

2. **Upload dos arquivos**
   - Clone o repositório: `git clone https://github.com/seu-usuario/mengao-run.git`
   - Coloque os arquivos (index.html, style.css, game.js, pixelArt.js) dentro da pasta
   - Faça commit: 
     ```bash
     git add .
     git commit -m "Add Mengão Run game"
     git push
     ```

3. **Ativar GitHub Pages**
   - Vá para Settings > Pages
   - Em "Source", selecione "main branch"
   - Seu jogo estará em: `https://seu-usuario.github.io/mengao-run/`

---

### 2. Vercel (Gratuito - Muito fácil)

#### Passos:

1. **Preparar projeto**
   - Crie uma pasta chamada `mengao-run`
   - Adicione um arquivo `vercel.json`:
     ```json
     {
       "buildCommand": "",
       "outputDirectory": "."
     }
     ```

2. **Deploy**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com GitHub
   - Clique em "Import Project"
   - Selecione o repositório `mengao-run`
   - Deploy automático!
   - URL: `https://seu-projeto.vercel.app`

---

### 3. Netlify (Gratuito - Alternativa)

#### Passos:

1. **Fazer login**
   - Acesse [netlify.com](https://netlify.com)
   - Clique em "Sign up"
   - Autentique com GitHub

2. **Deploy**
   - Clique em "New site from Git"
   - Selecione GitHub e autorize
   - Escolha o repositório `mengao-run`
   - Deploy automático!
   - URL gerada automaticamente

---

### 4. Replit (Gratuito - Online)

#### Passos:

1. **Criar projeto**
   - Acesse [replit.com](https://replit.com)
   - Clique em "Create"
   - Selecione "HTML, CSS, JS"

2. **Copiar código**
   - Copie o conteúdo de cada arquivo para seus equivalentes no Replit
   - O jogo será executado automaticamente

3. **Compartilhar**
   - Clique em "Share" para obter link público
   - URL: `https://replit.com/@seu-usuario/mengao-run`

---

### 5. Amazon S3 + CloudFront (Opção Avançada)

#### Passos:

1. **Criar bucket S3**
   - Acesse AWS S3
   - Crie um novo bucket
   - Ative "Static website hosting"

2. **Upload dos arquivos**
   - Upload de todos os arquivos do projeto
   - Defina permissões públicas

3. **CloudFront (CDN)**
   - Crie uma distribuição CloudFront
   - Aponte para seu bucket S3
   - Obtenha URL da distribuição

---

## 🔧 Instalação Local (Desenvolvimento)

### Windows (PowerShell)

```powershell
# Navegar para a pasta
cd C:\workspace\mengao_run

# Iniciar servidor simples (Python 3)
python -m http.server 8000

# Ou usar Node.js http-server
npx http-server

# Abrir no navegador
Start-Process "http://localhost:8000"
```

### Mac/Linux (Terminal)

```bash
# Navegar para a pasta
cd ~/workspace/mengao_run

# Iniciar servidor simples (Python 3)
python3 -m http.server 8000

# Ou usar Node.js http-server
npx http-server

# Abrir no navegador
open http://localhost:8000
```

---

## 📊 Comparação de Plataformas

| Plataforma | Preço | Facilidade | Personalização | Recomendado |
|-----------|-------|-----------|-----------------|------------|
| GitHub Pages | Gratuito | ⭐⭐⭐⭐⭐ | ⭐⭐ | ✅ |
| Vercel | Gratuito | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ✅ |
| Netlify | Gratuito | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ✅ |
| Replit | Gratuito | ⭐⭐⭐⭐ | ⭐ | ✅ |
| AWS S3 | Pago | ⭐⭐ | ⭐⭐⭐⭐⭐ | Para escala |

---

## 🔐 Boas Práticas de Segurança

### Antes de fazer deploy:

1. **Verificar console de erros**
   - Abra DevTools (F12)
   - Veja se há erros no Console

2. **Testar em diferentes navegadores**
   - Chrome
   - Firefox
   - Safari
   - Edge

3. **Verificar responsividade**
   - Abra DevTools
   - Teste em diferentes resoluções

4. **Otimizar assets**
   - Minificar CSS/JS (opcional, pois são poucos)
   - Comprimir imagens (não há imagens, apenas canvas)

---

## 📈 Analytics (Opcional)

Adicionar Google Analytics ao jogo:

```html
<!-- Adicionar ao final do index.html, antes de </body> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🐛 Troubleshooting

### Jogo não carrega
- Verificar console (F12) para erros
- Garantir que todos os arquivos estão no mesmo diretório
- Limpar cache do navegador (Ctrl+Shift+Del)

### Sons não funcionam
- Alguns navegadores bloqueiam áudio autoplay
- Usuário precisa interagir com a página primeiro (clique, toque)
- Verificar se Web Audio API está habilitada

### Performance baixa
- Desativar extensões do navegador
- Fechar outras abas
- Testar em outro navegador

---

## 📞 Suporte

Para mais informações sobre hosting:
- [GitHub Pages Docs](https://pages.github.com/)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)

---

**Boa sorte com seu deploy! Vamo Flamengo! 🔴⚫**
