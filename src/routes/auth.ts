import { Router } from 'express';

import { validatorFieldsLogin, validatorFieldsRegister } from '../middleware';
import { login, register } from '../controllers/auth';

export const authRouter = Router();

authRouter.post('/login', validatorFieldsLogin, login);
authRouter.post('/register', validatorFieldsRegister, register);
