import { fastify } from 'fastify';
import { DatabaseMYSQL } from './database-mysql';
import 'dotenv/config';
const { PORT } = process.env;

console.log('Variaveis  de ambiente carregadas:' , {PORT});

const server = fastify();

server.get('/', async (requestAnimationFrame, reply) =>{
    return { message: 'API server - Gestor de Videos'};
});

const database = new DatabaseMYSQL();

server.post("/videos", async (request, reply) => {
    const { tittle, description, duration } = request.body;
    await database.create ({
    tittle,
    description,
    duration
});
        console.log(await database.list());
        return reply.status(201).send();
})

server.get("/Videos", async (request) =>{
    const search = request.query.search;
    console.log(search);
    const videos = await database.list(search);
    return videos
} )

