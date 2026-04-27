import { fastify } from 'fastify'
import 'dotenv/config';
const { PORT } = process.env;


const server = fastify();

server.get('/', async (requestAnimationFrame, reply) =>{
    return { message: 'API server - Gestor de Videos'};
})

server.listen({ port:PORT}, (err, address) => {
    if(err){
        console.error(err);
        process.exit(1);
    }
    console.log(`Servidor rodando em ${address}`);
})