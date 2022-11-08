import { Router } from 'express';

import { validatorFieldsLogin, validatorFieldsRegister, verifyToken } from '../middleware';
import { login, register, profile } from '../controllers/auth';

export const authRouter = Router();

authRouter.post('/login', validatorFieldsLogin, login);
authRouter.post('/register', validatorFieldsRegister, register);
authRouter.get('/profile', verifyToken, profile); //tenemos el verify toquen, el cual tambien recupera id por el jwt a través del request
