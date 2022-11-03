import { Router } from 'express';
import { login, register } from '../controllers/auth';
import { validatorFieldsLogin, validatorFieldsRegister } from '../middleware/fieldsValidator';

const authRouter = Router();

authRouter.post('/login', validatorFieldsLogin, login);
authRouter.post('/register', validatorFieldsRegister, register);

export default authRouter;
