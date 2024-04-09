import { Router } from 'express';
import { createUser, createUsers } from '../services/user';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post('/user', async (req, res) => {
    const user = await createUser({
        name: 'Test',
        email: 'test@gmail.com',
        posts: {
           create: {
            title: 'Titulo de Teste',
            subtitle: 'teste'
           }
        }
    })

    if (user) {
        res.status(201).json({ user })
    } else {
        res.status(400).json({ err: 'Email já existe!' })
    }
})

mainRouter.post('/users', async (req, res) => {
    const result = await createUsers([
        { name: 'João', email: 'joao@gmail.com' },
        { name: 'Fulano', email: 'fulano@gmail.com' },
    ])

    res.status(201).json({ result })
})