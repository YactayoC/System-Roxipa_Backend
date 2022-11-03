import { Router } from 'express';
import { getAllUsers, login, register } from '../controllers/auth';

const authRouter = Router();

authRouter.post("/login", login)
authRouter.post("/register", register)
authRouter.get("/get-users", getAllUsers)

export default authRouter;
