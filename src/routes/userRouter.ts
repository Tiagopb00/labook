import express from "express";
import { UserController } from "../controllers/userController";


export const userRouter = express.Router()

const userController= new UserController() 

userRouter.post("/signup", userController.signUpController)
userRouter.post("/login", userController.loginController)