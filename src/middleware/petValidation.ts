import { body } from "express-validator"

export const petCreateValidation = () => {
    return [
        body("name")
            .isString()
            .withMessage(`The name is required`)
            .isLength({ max: 12 })
            .withMessage(`Max characters is 12`),
        body("species")
            .isString()
            .withMessage(`The species is required`),
        body("carry")
            .isString()
                .withMessage(`The carry is required`)
            .isLength({ max: 1 })
                .withMessage(`P, M or G`),
        body("weight")
            .isString()
            .withMessage(`The weight is required`)
            .isLength({ min: 2 })
            .withMessage(`Min characters is 8`),
        body("date_of_birth")
            .isString()
            .withMessage(`The date_of_birth is required`)

    ]
}