import { Request, Response } from 'express';

import { getClientByIdUserDB, registerClientDB } from '../services/client';
import { confirmUserDB, getUserByEmailDB, getUserByKeyDB, registerUserDB } from '../services/user';
import { sendEmail, generateJWT, comparePassword } from '../utils';

const authLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await getUserByEmailDB(email);

    if (!user) {
      return res.status(404).json({ hasError: true, msg: 'User not found' });
    }

    if (!comparePassword(password, user.password)) {
      return res.status(400).json({ hasError: true, msg: 'Invalid password' });
    }

    const client = await getClientByIdUserDB(user._id);
    const token = await generateJWT(user._id, user.email, client!.fullname);
    return res.status(200).json({ hasError: false, token, client });
  } catch (error) {
    return res.status(500).json({ hasError: true, msg: 'Internal server error' });
  }
};

const authRegister = async (req: Request, res: Response) => {
  const { email, password, ...dataClient } = req.body;

  try {
    const existsUser = await getUserByEmailDB(email);

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

const authConfirmUser = async (req: Request, res: Response) => {
  const { key } = req.params;

  try {
    const user = await getUserByKeyDB(key);

    if (!user) {
      return res.status(404).json({ hasError: true, msg: 'User not found' });
    }

    if (user.isConfirm) {
      return res.status(400).json({ hasError: true, msg: 'User already confirmed' });
    }

    await confirmUserDB(user._id);
    return res.status(200).json({ hasError: false, msg: 'User confirmed successfully' });
  } catch (error) {
    return res.status(500).json({ hasError: true, msg: 'Internal server error' });
  }
};

export { authLogin, authRegister, authConfirmUser };
