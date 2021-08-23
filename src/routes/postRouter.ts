import { PostController } from "../controllers/PostController";
import express from "express";



export const postRouter = express.Router()

const postController= new PostController() 



postRouter.post("/create", postController.createPostController)
postRouter.get("/:id", postController.GetPostByIdController)