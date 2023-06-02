import express, { Router } from 'express'
import { Request, Response } from 'express'
export const router = Router()

//ROUTES//

//rout - main

router.get("/", (req: Request, res: Response) => {
    res.send()
});

//route - tutor GET
router.get("/api/tutors", (req: Request, res: Response) => {

    res.send("")

})
//route - tutor POST

router.post("/api/tutor", (req: Request, res: Response) => {

    res.send()
});

//route - tutor PUT
router.put("/api/tutor/:id", (req: Request, res: Response) => {

    res.send()
});
//route - tutor DELETE
router.delete("/api/tutor/:id", (req: Request, res: Response) => {

    res.send()
});
//route - pet POST
router.post("/api/pet/:tutorId", (req: Request, res: Response) => {

    res.send()
});
//route - pet PUT
router.put("/api/pet/:petId/tutor/tutorId", (req: Request, res: Response) => {

    res.send()
});
//route - pet DELETE
router.delete("/api/pet/:petId/tutor/:tutorId", (req: Request, res: Response) => {

    res.send()
});