import { Request, Response } from "express";
import { businessSignup } from "../business/";

export const signup = async (
    req: Request,
    res: Response
 ) => {
    try {

        const { name, email, password } = req.body
 
        const token = await businessSignup(
                name,
                email,
                password
        )

        res
            .status(201)
            .send({
                message: "Usuário criado!",
                token
            })
 
    } catch (error) {
        res.status(400).send(error.message)
    }
}
