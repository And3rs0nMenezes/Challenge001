require('dotenv').config();
import mongoose from "mongoose"
import config from "config"
import dotenv from "dotenv"
export default connect;


const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS



async function connect() {

    const dbUri = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.rgwanvn.mongodb.net/?retryWrites=true&w=majority`

    try {
        await mongoose.connect(dbUri);
        console.log("connected to DB");


    } catch(e){
        console.log("DB not connected");
        console.log(`erro: ${e}`);

    }

    
} 