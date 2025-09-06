# Template Psico - 01

Este é um site para psicólogos desenvolvido com React, TypeScript, Vite e Express.

## Desenvolvimento Local

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Crie um arquivo `.env` baseado no `.env.example`:
   ```bash
   cp .env.example .env
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse o site em `http://localhost:3000`

## Estrutura do Projeto

- `client/` - Código frontend em React
- `server/` - Código backend em Express
- `shared/` - Código compartilhado entre frontend e backend
- `api/` - Funções serverless para Vercel

## Deployment na Vercel

1. Faça login na sua conta da Vercel
2. Crie um novo projeto
3. Conecte seu repositório Git
4. Configure as variáveis de ambiente necessárias
5. Faça o deploy!

O projeto já está configurado com o arquivo `vercel.json` para deployment na Vercel.

## Variáveis de Ambiente

Consulte o arquivo `.env.example` para ver as variáveis de ambiente necessárias.