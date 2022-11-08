import { Request, Response } from 'express';
import { registerClientDB } from '../services/client';
import { getUserByEmail, registerUserDB } from '../services/user';
import { sendEmail, generateJWT, comparePassword } from '../utils';

const profile = async (req: Request, res: Response) => {
  const { uid, name } = req.body;
  console.log(req.userId, 'aca en el controlador profile tienes tu token')
  
  return res.status(200).json({ hasError: false, uid, name });
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(404).json({ hasError: true, msg: 'User not found' });
    }

    if (!comparePassword(password, user.password)) {
      return res.status(400).json({ hasError: true, msg: 'Invalid password' });
    }
    //generar token
    const token = await generateJWT(user._id, user.email);
    return res.status(200).json({ hasError: false, token, user });
  } catch (error) {
    return res.status(500).json({ hasError: true, msg: 'Internal server error' });
  }
};

const register = async (req: Request, res: Response) => {
  const { email, password, ...dataClient } = req.body;

  try {
    const existsUser = await getUserByEmail(email);

    if (existsUser) {
      return res.status(400).json({ hasError: true, msg: 'User already exists' });
    }

    const user = await registerUserDB({ email, password });
    const client = await registerClientDB({ ...dataClient, user: user._id });
    await sendEmail(user.email, client.fullname, user.key);
    return res.status(201).json({ hasError: false, msg: 'User registered successfully' });
  } catch (error) {
    return res.status(500).json({ hasError: true, msg: 'Internal server error' });
  }
};

export { login, register, profile};
