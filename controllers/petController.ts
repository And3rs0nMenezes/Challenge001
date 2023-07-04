import { Request, Response } from 'express';
import { PetModel, TutorModel } from '../models/TutorAndPet';

export async function createPet(req: Request, res: Response) {
    try {
        const tutorId = req.params.tutorId;
        const tutor = await TutorModel.findById(tutorId);
        if (!tutor) { return res.status(404).json({ error: `Tutor does not exist` }) }
        const pet = req.body;
        
        tutor.pets.push(pet)
        
        await TutorModel.updateOne({ _id: tutorId }, tutor)  

        return res.status(201).json(tutor);

    } catch (e) {
        console.log(e);
        return res.status(500).json({ error:`Try later.` }); 
    }
}

export async function updatePet(req: Request, res: Response) {
    try {
        const id = req.params.tutorId;
        const petId = req.params.petId
        const pet = req.body
        const tutor = await TutorModel.findById(id);
        const pets = tutor?.pets

        
        if(!tutor) {
            return res.status(404).json({error:`Tutor does not exist`})
        }

        if (pets !== undefined) {   
            for (let i = 0; i < pets.length; i++) {
                if (pets[i].id == petId ) { 
                    pets[i] = pet
                    tutor.pets = pets
                }
            await TutorModel.updateOne({ _id: id }, tutor)  
        }
        }
        return res.status(202).json({msg:`Pet updated`})
        
    } catch (e:any) {
        console.log(`${e}`);
        return res.status(500).json({error:`Try later`});
        
    }
}

export async function deletePet(req:Request,res:Response) {

    try {
        const id = req.params.tutorId;
        const petId =req.params.petId
        const tutor = await TutorModel.findById(id);
        const pets = tutor?.pets

        
        if(!tutor) {
            return res.status(404).json({error:`Tutor does not exist`})
        }

        if (pets !== undefined) {   
            for (let i = 0; i < pets.length; i++) {
                if (pets[i].id == petId ) {
                    pets.splice(i, 1);
                }
            await TutorModel.updateOne({ _id: id }, tutor)  
        }
        }
        return res.status(202).json({msg:`Pet deleted`})
        
    } catch (e:any) {
        console.log(`${e}`);
        return res.status(500).json({error:`Try later.`});
        
    }
    
}