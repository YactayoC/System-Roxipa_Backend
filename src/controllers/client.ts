import { Request, Response } from 'express';
import { getClientByIdDB } from '../services/client';

const getClient = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await getClientByIdDB(id);
    return res.status(201).json({ hasError: false, user });
  } catch (error) {
    return res.status(500).json({ hasError: true, msg: 'Internal server error' });
  }
};

export { getClient };
