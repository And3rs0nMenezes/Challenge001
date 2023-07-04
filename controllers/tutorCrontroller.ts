import { Request, Response } from "express";
import { TutorModel } from "../models/TutorAndPet";
import { accessSync } from "fs";
import Logger from '../config/logger';

export async function createTutor(req:Request,res:Response){
    try {
        const data = req.body;
        const tutor = await TutorModel.create(data);
        return res.status(201).json(tutor);
    } catch (e) {
        console.log(`${e}`);
        return res.status(500).json({error:`Try later`});
        
    }
}

export async function findTutorById(req:Request,res:Response) {
    try {
        
        const id = req.params.id 
        const tutor = await TutorModel.findById(id)

        if (!tutor){
            return res.status(404).json({error:`Tutor does not exist`})
        }

        return res.status(200).json(tutor);

    } catch (e:any) {
        console.log(`${e}`);
        return res.status(500).json({error:`Try later.`});
        
    }
    
}

export async function getAllTutors(req:Request,res:Response) {

    try {

        const tutors = await TutorModel.find()
        return res.status(200).json(tutors);
        
    } catch (e:any) {
        console.log(`${e}`);
        return res.status(500).json({error:`Try later.`});
        
    }
}

export async function deleteTutor(req:Request,res:Response) {

    try {

        const id = req.params.id;
        const tutor = await TutorModel.findById(id);

        if(!tutor) {
            return res.status(404).json({error:`Tutor does not exist`})
        }
        if (tutor.pets.length > 0) {
            return res.status(404).json({error:`Tutor have an pet delete this first`})
        }

        await tutor.deleteOne()
        return res.status(202).json({msg:`Tutor deleted`})
        
    } catch (e:any) {
        Logger.error(`${e}`);
        return res.status(500).json({error:`Try later.`});
        
    }
    
}

export async function updateTutor(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const data = req.body;
        const tutor = await TutorModel.findByIdAndUpdate(id, data, { new: true });

        if (!tutor) {
            return res.status(404).json({ error: `Tutor does not exist` });
        }

        return res.status(200).json(tutor);
    } catch (e: any) {
        Logger.error(`${e}`);
        return res.status(500).json({ error: `Try later.` });
    }
}
