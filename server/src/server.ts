import express, { request } from 'express';

const app = express();

/** Configurar Express to use JSON */
app.use(express.json());

const users = [
    'Usuário A',
    'Usuário B',
    'Usuário C'
];

/** Obter usuários */
app.get('/users', (request, response) => {
    const search = String(request.query.search);
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
    return response.json(filteredUsers);
});

/** Obter usuário */
app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    const user = users[id];
    response.json(user);
});

/** Criar usuário */
app.post('/users', (request, response) => {
    const data = request.body;
    
    const user = {
        name: data.name,
        email: data.email
    }

    return response.json(user);
})

app.listen(3333);