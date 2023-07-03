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
        return res.status(500).json({ error:`try later.` }); 
    }
}

//Put

export async function updatePet(req: Request, res: Response) {
    try {
        const petId =req.params.petId
        const pet = await PetModel.findById(petId)
    
        if (!pet) {
                return res.status(404).json({ error: `Pet does not exist` })
        }

        await TutorModel.findByIdAndUpdate({ _id: petId },pet);

        return res.status(201).json("pets deleted");

    } catch (e) {
        console.log(e);
        return res.status(500).json({ error:`try later.` }); 
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
        return res.status(500).json({error:`try later.`});
        
    }
    
}







// export async function updatePet(req:Request,res:Response){
//     try {
        
//     } catch (error) {
        
//     }
    
//     }

//     export async function deletePet(req:Request,res:Response){
//         try {
            
//         } catch (error) {
            
//         }
        
//         }