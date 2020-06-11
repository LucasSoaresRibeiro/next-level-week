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

Pacote de ícones do React
```
npm install react-icons
```

Pacote de rotas
```
npm install react-router-dom
```

# Conceitos Gerais

## ES6

### Classes

``` javascript

class List {
  constructor() {
    this.data = [];
  }

  static print() {
    console.log('este é um método estático');
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();
    this.usuario = 'Lucas';
  }

  mostraUsuario() {
    console.log(this.usuario);
  }
}

const MinhaLista = new TodoList();
MinhaLista.add('Novo todo');
// ['Novo todo']
TodoList.print();
// este é um método estático

```

### Arrow Functions

``` javascript

const minhaFuncao = () => {
  console.log('mensagem');
};

minhaFuncao();
// mensagem

```

### Desestruturação

``` javascript

const usuario = {
  nome: 'Lucas',
  idade: 33,
  endereco: {
    cidade: 'Sao Jose dos Campos',
    estado: 'SP',
  },
};

const { nome, idade, endereco } = usuario;

console.log(nome);
// Lucas
console.log(idade);
// 33
console.log(endereco.cidade);
// Sao Jose dos Campos
console.log(endereco.estado);
// SP

```

### Operador Rest

``` javascript 

const usuario = {
  nome: 'Lucas',
  idade: 33,
  endereco: {
    cidade: 'Sao Jose dos Campos',
    estado: 'SP',
  },
};

const { nome, ...resto } = usuario;

console.log(nome);
// Lucas

console.log(resto);
// { idade: 33, endereco: { cidade: 'Sao Jose dos Campos', estado: 'SP' }

```

``` javascript 

const soma = (a, b, ..params) => {
  return params;
};

soma(1, 2, 3, 4);
// [3, 4]

```

### Operador Spread

``` javascript 

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [ ...arr1, ...arr2 ];
console.log(arr3);
// [1, 2, 3, 4, 5, 6]

```

``` javascript

const usuario1 = {
  nome: 'Lucas',
  idade: 33,
  endereco: {
    cidade: 'Sao Jose dos Campos',
    estado: 'SP',
  },
};

const usuario2 = { ...usuario1,  nome: 'Usuario 2' };
console.log(usuario2);
// {"nome":"Usuario 2","idade":33,"endereco":{"cidade":"Sao Jose dos Campos","estado":"SP"}}

```

### Template Literals

``` javascript
const estado = 'SP';
console.log(`Meu estado é ${estado}`);
// Meu estado é SP
```

### Object Short Syntax

``` javascript

const nome = 'Lucas';
const idade = 33;

const usuario = {
  nome,
  idade,
  empresa: 'LSR Informatica',
};

console.log(usuario);
// {"nome":"Lucas","idade":33,"empresa":"LSR Informativa"}"

```

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
```
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
```
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