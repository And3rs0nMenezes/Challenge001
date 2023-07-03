require('dotenv').config();
import mongoose from "mongoose"
import config from "config"
import dotenv from "dotenv"
export default connect;

//Logger

import Logger from '../config/logger';

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS



async function connect() {

    const dbUri = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.rgwanvn.mongodb.net/?retryWrites=true&w=majority` , env = 'development'

    try {
        await mongoose.connect(dbUri);
        Logger.info("connected to DB");


    } catch(e){
        Logger.error("DB not connected");
        Logger.error(`${e}`);
        process.exit(1);

    }

    
} 