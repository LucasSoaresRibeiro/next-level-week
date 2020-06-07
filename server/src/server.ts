import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    return response.json([
        'Usuário A',
        'Usuário B',
        'Usuário C'
    ])
});

app.post('/users', (request, response) => {
    const user = {
        name: 'Lucas',
        email: 'ribeiro.lucas.soares@gmail.com'
    }

    return response.json(user);

})

app.listen(3333);