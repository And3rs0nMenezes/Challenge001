import { Request, Response } from "express";
import { UserModel } from "../models/User";
const bcrypt = require('bcrypt');

export async function createUser(req:Request,res:Response){

    try {
        const saltRounds = Number(process.env.SALT_ROUNDS)
        const data = req.body;
        const email = req.body.email
        const password = req.body.password
        const salt = bcrypt.genSaltSync(saltRounds)

        const encryptedPassword = bcrypt.hashSync(password, salt);
 
        return res.status(201).json(encryptedPassword);
    } catch (e) {
        console.log(`${e}`);
        return res.status(500).json({error:`Try later`});
        
    }

}