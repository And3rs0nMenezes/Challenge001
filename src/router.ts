import { Router,Request, Response } from 'express'
import { type } from 'os';
import { request } from 'http';
import { createTutor, findTutorById , getAllTutors, deleteTutor, updateTutor } from '../controllers/tutorCrontroller';
import { createPet , updatePet , deletePet} from '../controllers/petController';
import { createUser } from '../controllers/userController';
const router = Router();

//Validations

import {validate} from "./middleware/handleValidation"
import { tutorCreateValidation} from './middleware/tutorValidation';
import {petCreateValidation } from './middleware/petValidation';

//ROUTES//

export default router 
router.get("/",(req:Request, res:Response) => {
 res.status(200).send(`API Working!`);
})


//routes - Tutor

.post("/tutor",tutorCreateValidation(),validate,createTutor)
.post("/auth",createUser)
.get("/tutor/:id",findTutorById)
.get("/tutors",getAllTutors)
.delete("/tutor/:id",deleteTutor)
.put("/tutor/:id",tutorCreateValidation(),validate, updateTutor)

//route - Pets

.post("/pet/:tutorId",petCreateValidation(),validate,createPet)
.put("/pet/:petId/tutor/:tutorId",validate, updatePet)
.delete("/pet/:petId/tutor/:tutorId",deletePet);