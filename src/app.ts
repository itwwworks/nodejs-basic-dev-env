import dotenv from 'dotenv';
import fastify from 'fastify';
import cors from '@fastify/cors'

dotenv.config();

const app = fastify({ logger: true });
const port = process.env.PORT || 3001;

// register JWT to APP - comment out if jwt authentication is needed
/* app.register(fastifyJWT, {
    secret: process.env.SECRET || 'SehrGeheimesSecret',
    // Global default verifying method options
    verify: { issuer: process.env.ISSUER || 'example.de' },
}); */

// register Cors to APP
app.register(cors, {
    origin: (origin, cb) => {
        cb(null, true);
    },
});

app.get('/', (req, res) => {
    res.type('text/html').send(`
            <h1><a href="https://itwwworks.de/">itwwworks</a></h1>
        `);
});

export { app, port };
