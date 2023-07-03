import {body} from "express-validator"

export const userCreateValidation = () =>{
    return[
    body("name")
        .isString()
        .withMessage(`The name is required`)
        .isLength({max:12})
        .withMessage(`Max characters is 12`),
    body("email")
        .isString()
        .withMessage(`The email is required`)
        .isLength({min:12})
        .withMessage(`Min characters is 12`),
    body("password")
        .isString()
        .withMessage(`The pasword is required`)
        .isLength({min:12})
        .withMessage(`Min characters is 12`),
    ]
}