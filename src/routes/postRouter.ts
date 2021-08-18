import express from "express";
import { PostController } from "../controllers/postController";



export const postRouter = express.Router()

const postController= new PostController() 



postRouter.post("/create", postController.createPostController)
postRouter.get("/:id", postController.GetPostByIdController)