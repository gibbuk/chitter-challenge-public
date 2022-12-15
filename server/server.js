import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

import { login } from './routes/login.js';
import { register } from './routes/register.js';
import { peeps } from './routes/peeps.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(`/login`, login);
app.use(`/register`, register);
app.use(`/peeps`, peeps);

const main = async () => {
    console.log(`Connecting to DBB @ ${process.env.DB_URI}`);
    await mongoose.connect(`${process.env.DB_URI}`);
}

main().then(() => console.log(`Connected to DB`)).catch(err => console.log(err));

const server = app.listen(4000, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is running on http://${SERVERHOST}:${SERVERPORT}`);
});

export default server;
