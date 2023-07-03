require('dotenv').config();
import express from 'express'
import config from 'config'
import  router  from './router'

//DB
import db from "../config/db";

const app = express()
app.use(express.json())

app.use(router)

//app port

const port = 3000

app.listen(3000,() => {
    console.log(`Typescript and express application port:${port}`);
    db();
});

