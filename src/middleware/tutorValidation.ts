import { body } from "express-validator"

export const tutorCreateValidation = () => {
    return [
        body("name")
            .isString()
                .withMessage(`The name is required`)
            .isLength({ max: 12 })
                .withMessage(`Max characters is 12`),
        body("phone")
            .isString()
                .withMessage(`The phone is required`)
            .isLength({ min: 11 ,max:11})
                .withMessage(`Phone characters is 11`),
        body("email")
            .isEmail()
                .withMessage(`The email is required`)
            .isLength({ min: 12 })
                .withMessage(`Min email characters is 12`),
        body("date_of_birth")
            .isString()
                .withMessage(`The date_of_birth is required`)
            .isLength({ min: 8 })
                .withMessage(`Min date_of_birth characters is 8`),
        body("zip_code")
            .isString()
                .withMessage(`The zip_code is required`)
            .isLength({ min: 8 })
                .withMessage(`Min zip_code characters is 8`)
    ]
}