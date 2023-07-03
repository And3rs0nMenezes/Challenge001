require('dotenv').config();
import express from 'express'
import config from 'config'
import  router  from './router'


//Logger

import Logger from '../config/logger';

// Middleware

import morganMaddleware from './middleware/morganMiddleware';

//DB
import db from "../config/db";

const app = express()
app.use(morganMaddleware)
app.use(express.json())
app.use(router)


//app port

const port = 3000

app.listen(3000,() => {
    Logger.info(`Typescript and express application port:${port}`);
    db();
});

