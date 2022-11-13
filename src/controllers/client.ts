import { Request, Response } from 'express';
import { getClientByIdDB, getClientsDB } from '../services/client';

const getClients = async (_req: Request, res: Response) => {
  try {
    const clients = await getClientsDB();
    return res.status(201).json({ hasError: false, clients });
  } catch (error) {
    return res.status(500).json({ hasError: true, msg: 'Internal server error' });
  }
};

const getClient = async (req: Request, res: Response) => {
  const { idClient } = req.params;

  try {
    const client = await getClientByIdDB(idClient);

    if (!client) {
      return res.status(404).json({
        hasError: true,
        message: 'Client not found',
      });
    }

    return res.status(201).json({ hasError: false, client });
  } catch (error) {
    return res.status(500).json({ hasError: true, msg: 'Internal server error' });
  }
};

export { getClients, getClient };
