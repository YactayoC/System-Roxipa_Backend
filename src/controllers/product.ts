import { Request, Response } from 'express';
import { registerClientDB } from '../services/client';
import { getUserByEmail, registerUserDB } from '../services/user';

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.status(201).json({ msg: 'Okey', hasError: false });
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
    return res.status(201).json({ hasError: false, msg: 'User registered successfully' });
  } catch (error) {
    return res.status(500).json({ hasError: true, msg: 'Internal server error' });
  }
};

export { login, register };
