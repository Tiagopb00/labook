import { Router } from "express";


export const userRouter = Router();

const userSignUp = new SignUpController();
const userLogin = new LoginController();

userRouter.post("/signup", userSignUp.createUser);
userRouter.post("/login", userLogin.login);