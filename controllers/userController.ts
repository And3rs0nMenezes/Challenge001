import { Request, Response } from "express";
import { UserModel } from "../models/User";

export async function createUser(req:Request,res:Response){
    try {
        const data = req.body;
        const user = await UserModel.create(data);
        return res.status(201).json(user);
    } catch (e) {
        console.log(`Erro no sistema:${e}`);
        
    }
}