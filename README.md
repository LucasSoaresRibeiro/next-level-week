# Ecoleta - Next Level Week
Projeto-estudo da Next Level Week NLW da Rocket Seat (https://nextlevelweek.com).
O projeto consiste em 3 aplicações:

- Server: API RESTful em NodeJS/Typescript para:
  - Regras de negócio
  - Conexão com o banco de dados
  - Envio de emails ou conexão com serviços externos
  - Autenticação e autorização dos usuários
  - Criptografia e segurança

- Web: Front-end da aplicação em ReactJS para
  - Listagem de usuários (HTML & CSS)

- Mobile: Aplicação mobile em React Native

# Principais comandos

## Back-end (server)

Iniciar repositório sem prompts
```
mkdir server
npm init -y
```

Adicionar Express
```
npm install express
npm install @types/express -D
```

Iniciar typescript
```
npm install typescript -D
npm install ts-node -D
npx tsc --init
npm install ts-node-dev -D
```

Rodar aplicação sem live reload
```
npx ts-node src/server.ts
```

Rodar aplicação com live reload
```
npx ts-node-dev src/server.ts
```

## Front-end (web)

Criar estrutura inicial 
```
npx create-react-app web --template=typescript
```

Rodar aplicação
```
npm start
```

# Conceitos Gerais

## Métodos HTTP
- GET: Buscar uma ou mais informações do back-end
- POST: Criar uma nova informação no back-end
- PUT: Atualizar uma informação no back-end
- DELETE: Remover uma informação no back-end

## Convenções de Route Names
- index: Listagensde registros
- show: Exibição única de um registro
- create: Criação de um registro
- update: Atualização de um registro
- delete ou destroy: Remoção de um registro

## Tipos de Parâmetros do Express
- request.params: Parâmetros utilizados para identificar um recurso específico 
- request.query: Parâmetros, geralmente opcionais, utilizados para filtros de recursos

# Tecnologias

- Node.js (https://nodejs.org/)
- Typescript (https://www.typescriptlang.org/)
- React - JavaScript library for building user interfaces (https://github.com/facebook/react)
- React Native - A framework for building native apps using React (https://reactnative.dev/)
- Expo.io - Fast build ap with React Native (https://expo.io/)
- Knex.js - A SQL Query Builder for Javascript (http://knexjs.org/)

# Continuar
- Olhando as Oportunidades: 1h44m44s