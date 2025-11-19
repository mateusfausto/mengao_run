#!/usr/bin/env powershell
# Script para deploy do Mengão Run no GitHub
# Execute em: c:\workspace\mengao_run

Write-Host "`n🎉 MENGÃO RUN - SCRIPT DE DEPLOY`n" -ForegroundColor Cyan

# Verificar se está na pasta correta
if (-not (Test-Path "index.html")) {
    Write-Host "❌ ERRO: Execute este script na pasta c:\workspace\mengao_run" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Pasta correta detectada`n" -ForegroundColor Green

# Menu
Write-Host "Escolha uma opção:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Testar localmente (python -m http.server 8000)"
Write-Host "2. Inicializar git (git init)"
Write-Host "3. Fazer primeiro commit"
Write-Host "4. Ver status do git"
Write-Host "5. Fazer push ao GitHub"
Write-Host "0. Sair"
Write-Host ""

$choice = Read-Host "Digite a opção (0-5)"

switch ($choice) {
    "1" {
        Write-Host "`n🚀 Iniciando servidor local..." -ForegroundColor Cyan
        Write-Host "Abra http://localhost:8000 no navegador`n" -ForegroundColor Yellow
        python -m http.server 8000
    }
    
    "2" {
        Write-Host "`n🔧 Inicializando git..." -ForegroundColor Cyan
        git init
        Write-Host "✅ Git inicializado`n" -ForegroundColor Green
    }
    
    "3" {
        Write-Host "`n📝 Adicionando arquivos..." -ForegroundColor Cyan
        git add .
        git commit -m "Initial commit: Mengão Run game"
        Write-Host "✅ Commit criado`n" -ForegroundColor Green
    }
    
    "4" {
        Write-Host "`n📊 Status do git:" -ForegroundColor Cyan
        git status
        Write-Host ""
    }
    
    "5" {
        Write-Host "`n🚀 Pronto para push!`n" -ForegroundColor Cyan
        Write-Host "Execute estes comandos:" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "git branch -M main" -ForegroundColor Yellow
        Write-Host "git remote add origin https://github.com/SEU-USUARIO/mengao-run.git" -ForegroundColor Yellow
        Write-Host "git push -u origin main" -ForegroundColor Yellow
        Write-Host ""
    }
    
    "0" {
        Write-Host "Até logo! 👋" -ForegroundColor Green
        exit 0
    }
    
    default {
        Write-Host "❌ Opção inválida!" -ForegroundColor Red
    }
}
