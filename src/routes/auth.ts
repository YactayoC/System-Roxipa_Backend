import { Router } from 'express';

import { validatorFieldsLogin, validatorFieldsRegister } from '../middleware';
import { authLogin, authRegister } from '../controllers/auth';

export const authRouter = Router();

authRouter.post('/login', validatorFieldsLogin, authLogin);
authRouter.post('/register', validatorFieldsRegister, authRegister);
// authRouter.get('/profile', verifyToken, profile); //tenemos el verify toquen, el cual tambien recupera id por el jwt a través del request
