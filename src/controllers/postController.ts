import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../model/authentication";
import {PostBusiness} from "../business/postBusiness";
import { PostDatabase  } from "../data/postDataBase";

const postDatabase = new PostDatabase()
const postBusiness= new PostBusiness()

export class  PostController {
createPostController = async (
    req: Request,
    res: Response
 ) => {
    try {
 
        const { photo, description, type } = req.body

        const token: string = req.headers.authorization as string

        const tokenData: authenticationData = getTokenData(token)
 
        await postBusiness.createpostBusiness(
            photo,
            description,
            type,
            tokenData.id
        )
 
       res.status(201).send("Post criado!")
 
    } catch (error) {
       res.status(400).send(error.message)
    }
}

GetPostByIdController = async (
    req: Request,
    res: Response
 ) => {
    try {
        const { id } = req.params

        const result = await postBusiness.GetPostByIdBusiness(id)
        
        res.status(200).send(result)

    } catch (error) {
        res.status(400).send(error.message)
    }
}

}

