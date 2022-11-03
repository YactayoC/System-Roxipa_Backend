import { Request, Response } from 'express';
import { loginDB } from '../services/auth';

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const dataLogin = await loginDB({ email, password });

  res.status(201).json({ msg: 'Okey', data: dataLogin, hasError: false });
};

const register = (req: Request, res: Response) => {
  const { email, password } = req.body;
  loginDB({ email, password });

  res.status(201).json({ msg: 'Okey', hasError: false });
};

const getAllUsers = (_req: Request, res: Response) => {
  const users = ['user1', 'user2', 'user3'];
  console.log(users);
  res.status(200).json({ users, hasError: false });
};

export { login, register, getAllUsers };
