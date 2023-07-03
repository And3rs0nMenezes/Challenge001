import { Router,Request, Response } from 'express'
import { type } from 'os';
import { request } from 'http';
import { createUser} from '../controllers/userController'

const router = Router();

//ROUTES//

export default router 
router.get("/test",(req:Request, res:Response) => {
 res.status(200).send(`API Working!`);
}).post("/User",createUser);

// //route - tutor GET
// router.get("/tutors", (req: Request, res: Response) => {

// })
// //route - auth POST
// router.get("/auth", (req: Request, res: Response) => {

// })

// //route - tutor POST

// router.post("/tutor", (req: Request, res: Response) => {

// });

// //route - tutor PUT
// router.put("/tutor/:id", (req: Request, res: Response) => {


// });
// //route - tutor DELETE
// router.delete("/tutor/:id", (req: Request, res: Response) => {

// });
// //route - pet POST
// router.post("/pet/:tutorId", (req: Request, res: Response) => {

// });
// //route - pet PUT
// router.put("/pet/:petId/tutor/:tutorId", (req: Request, res: Response) => {
  
// });
// //route - pet DELETE
// router.delete("/pet/:petId/tutor/:tutorId", (req: Request, res: Response) => {
// });
