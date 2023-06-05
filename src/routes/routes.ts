import express, { Router, response } from 'express'
import { Request, Response } from 'express'
import { tutors } from '../data/data';
import { type } from 'os';
import { request } from 'http';
export const router = Router()

//ROUTES//

//rout - main

router.get("/", (req: Request, res: Response) => {
    res.send()
});

//route - tutor GET
router.get("/api/tutors", (req: Request, res: Response) => {
    res.json(tutors)
    res.status(200).send()
})
//route - tutor POST

router.post("/api/tutor", (req: Request, res: Response) => {
    const data = (req.body)
    tutors.push(data);
    res.status(201).send(data)
});

//route - tutor PUT
router.put("/api/tutor/:id", (req: Request, res: Response) => {
    const { id } = req.params
    for (let i = 0; i < tutors.length - 1; i++) {
        if (tutors[i].id == id) {
            const data = req.body
            data.id = id
            tutors[i] = data
            res.status(204).send()
        }

    }
    res.status(404).send()


});
//route - tutor DELETE
router.delete("/api/tutor/:id", (req: Request, res: Response) => {
    const { id } = req.params
    for (let i = 0; i < tutors.length - 1; i++) {
        if (tutors[i].id == id) {
            tutors.splice(i,1)
            res.status(204).send()
            return
        }
    }
    res.status(404).send()
});
//route - pet POST
router.post("/api/pet/:tutorId", (req: Request, res: Response) => {
    const { tutorId } = req.params
    const pet = req.body
    for (let i = 0; i < tutors.length - 1; i++) {
        if (tutors[i].id == tutorId) {
            tutors[i].pets.push(pet)
            res.status(201).send()
        }
    }
    res.status(404).send()
});
//route - pet PUT
router.put("/api/pet/:petId/tutor/:tutorId", (req: Request, res: Response) => {
    const { petId } = req.params
    const {tutorId} = req.params
    const data = req.body

    for (let i = 0; i < tutors.length - 1; i++) {
        if (tutors[i].id == tutorId) {
            for (let j = 0; j < tutors[i].pets.length; j++) {
                if (tutors[i].pets[j].id == petId) {
                    data.id = petId
                    tutors[i].pets[j] = data
                    res.status(204).send()
                }
            }res.status(404).send()
        }

    }res.status(404).send()
    
});
//route - pet DELETE
router.delete("/api/pet/:petId/tutor/:tutorId", (req: Request, res: Response) => {
    const { petId } = req.params
    const {tutorId} = req.params

    for (let i = 0; i < tutors.length - 1; i++) {
        if (tutors[i].id == tutorId) {
            for (let j = 0; j < tutors[i].pets.length; j++) {
                if (tutors[i].pets[j].id == petId) {
                    tutors[i].pets.splice(j, 1);

                    res.status(204).send()
                }
            }res.status(404).send()
        }
    }res.status(404).send()
});