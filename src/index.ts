import express from "express";
import cors from "cors";
import { userRouter } from "./routes/userRouter";
import { postRouter } from "./routes/postRouter";

const app = express();

app.use(express.json());
app.use(cors());

app.use('/users', userRouter)
app.use('/posts', postRouter)

app.listen(3003, () => {
  console.log("Server is running at http://localhost:3003");
});








