# Next Level Week
Projeto-estudo da Next Level Week NLW da Rocket Seat (https://nextlevelweek.com)
O projeto consiste em 3 aplicações:

## Server
API RESTful em NodeJS/Typescript para:
- Regras de negócio
- Conexão com o banco de dados
- Envio de emails ou conexão com serviços externos
- Autenticação e autorização dos usuários
- Criptografia e segurança

## Web
Front-end da aplicação em ReactJS para:
- Listagem de usuários (HTML & CSS)

## Mobile
Aplicação mobile em React Native

# Principais comandos

## Back-end (server)

### Iniciar repositório sem prompts
mkdir server
npm init -y

### Adicionar Express
npm install express
npm install @types/express -D

### Iniciar typescript
npm install typescript -D
npm install ts-node -D
npx tsc --init
npm install ts-node-dev -D

### Rodar aplicação sem live reload
npx ts-node src/server.ts

### Rodar aplicação com live reload
npx ts-node-dev src/server.ts

## Front-end (web)

### Criar estrutura inicial 
npx create-react-app web --template=typescript

### Rodar aplicação
npm start

# Conceitos Gerais

## Métodos HTTP
- GET: Buscar uma ou mais informações do back-end
- POST: Criar uma nova informação no back-end
- PUT: Atualizar uma informação no back-end
- DELETE: Remover uma informação no back-end

## 