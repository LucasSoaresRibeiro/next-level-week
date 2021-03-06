<h1 align="center">
    <img alt="Ecoleta" title="Ecoleta" src=".github/ecoleta.svg" width="220px" />
</h1>

<p align="center">
  <img alt="Ecoleta" src=".github/ecoleta.png" width="100%">
</p>

# Conteúdo
- [Conteúdo](#conteúdo)
- [Visão Geral](#visão-geral)
- [Principais comandos](#principais-comandos)
  - [Back-end (server)](#back-end-server)
  - [Front-end (web)](#front-end-web)
  - [Mobile](#mobile)
- [Conceitos Gerais](#conceitos-gerais)
  - [ECMAScript](#ecmascript)
  - [Métodos HTTP](#métodos-http)
  - [Convenções de Route Names](#convenções-de-route-names)
  - [Tipos de Parâmetros do Express](#tipos-de-parâmetros-do-express)
  - [Tipos de arquivos](#tipos-de-arquivos)
  - [React e Typescript](#react-e-typescript)
- [Tecnologias](#tecnologias)

# Visão Geral
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
``` console
mkdir server
npm init -y
```

Adicionar Express
``` console
npm install express
npm install @types/express -D
```

Iniciar typescript
``` console
npm install typescript -D
npm install ts-node -D
npx tsc --init
npm install ts-node-dev -D
```

Rodar aplicação sem live reload
``` console
npx ts-node src/server.ts
```

Rodar aplicação com live reload
``` console
npx ts-node-dev src/server.ts
```

## Front-end (web)

Criar estrutura inicial 
``` console
npx create-react-app web --template=typescript
```

Rodar aplicação
``` console
npm start
```

Pacote de ícones do React
``` console
npm install react-icons
```

Pacote de rotas
``` console
npm install react-router-dom
```

## Mobile

Instalar o Expo CLI globalmente
``` console
npm install -g expo-cli
```

Iniciar projeto
``` console
expo init mobile
```

Instalar react-navigation
``` console
npm install @react-navigation/native
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install @react-navigation/stack
```

Instalar fontes do Google
``` console
expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto
```

Instalar extensão para maps
``` console
expo install react-native-maps
expo install expo-location
```

Instalar extensão para envio de email
``` console
expo install expo-mail-composer
```

Rodar projeto
``` console
yarn start # you can open iOS, Android, or web from here, or run them directly with the commands below.
yarn android
yarn ios # requires an iOS device or access to a macOS for a simulator
yarn web
```

# Conceitos Gerais

## ECMAScript
[Visitar guia ECMAScript](https://github.com/LucasSoaresRibeiro/ecma-script)

## Métodos HTTP
- GET: Buscar uma ou mais informações do back-end
- POST: Criar uma nova informação no back-end
- PUT: Atualizar uma informação no back-end
- DELETE: Remover uma informação no back-end

## Convenções de Route Names
- index: Listagens de registros
- show: Exibição única de um registro
- create: Criação de um registro
- update: Atualização de um registro
- delete ou destroy: Remoção de um registro

## Tipos de Parâmetros do Express
- request.params: Parâmetros utilizados para identificar um recurso específico 
- request.query: Parâmetros, geralmente opcionais, utilizados para filtros de recursos

## Tipos de arquivos
- .ts: Arquivos typescript
- .d.ts: Arquivos template do typescript
- .tsx: Arquivos do React para escrever typescript/javascript com tags html/xml

## React e Typescript
- React.FC<InterfaceNameProps>: React Function Component. Tipo genérico do typescript que recebe uma interface como parâmetro. Ex:
``` typescript
import React from 'react';

interface HeaderProps {
    title: string;
}

const Header:React.FC<HeaderProps> = () => {
    return (
        <header>
            <h1>Ecoleta</h1>
        </header>
    );
};

export default Header;
``` 

- Interface: Definição de tipagem no Typescript (Ver React.FC)
- useState: Gerenciamento de estados no React
``` typescript
import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [counter, setCounter] = useState(0);

  function handleButtonClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <button type="button" onClick={handleButtonClick}>Aumentar</button>
      <h1>Contador: {counter}</h1>
    </div>
  )

}

export default App;
```

# Tecnologias

- Node.js (https://nodejs.org/)
- Typescript (https://www.typescriptlang.org/)
- React - JavaScript library for building user interfaces (https://github.com/facebook/react)
- React Native - A framework for building native apps using React (https://reactnative.dev/)
- Expo.io - Fast build ap with React Native (https://expo.io/)
- Knex.js - A SQL Query Builder for Javascript (http://knexjs.org/)
