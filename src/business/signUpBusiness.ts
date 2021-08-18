import { hash } from 'bcryptjs';
import { app } from '..';
import { connection } from '../data/BaseDatabase';
import UserDatabase from '../data/UserDatabase';
import { user } from "../model/user";
import { generateToken } from "../services/authenticator";
import { generateId } from "../services/idGenerator";
import { Response, Request } from "express";

export const signUpBusiness = async (req: Request, res: Response) => {
    try {
       let message = "Success!"
       const { name, email, password } = req.body
 
       if (!name || !email || !password) {
          res.statusCode = 406
          message = '"name", "email" and "password" must be provided'
          throw new Error(message)
       }
 
       const id: string = generateId()
 
       const cypherPassword = await hash(password);
 
       await connection('labook_users')
          .insert({
             id,
             name,
             email,
             password: cypherPassword
          })
 
       const token: string = generateToken({ id })
 
       res.status(201).send({ message, token })
 
    } catch (error) {
       res.statusCode = 400
       let message = error.sqlMessage || error.message
 
       res.send({ message })
    }
 })