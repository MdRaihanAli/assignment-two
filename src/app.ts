import express, { Application } from "express";
import cors from "cors";
import { userRouter } from "./modules/user/user.routes";
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRouter);

app.get('/',(req, res)=>{
res.send('Hello , App is ready')
})

export default app;
