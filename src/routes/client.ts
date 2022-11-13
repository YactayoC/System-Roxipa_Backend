import { Router } from 'express';

import { validatorIdClient } from '../middleware';
import { getClient, getClients } from '../controllers/client';


export const clientRouter = Router();

clientRouter.get('/get-clients', getClients);
clientRouter.get('/get-client/:idClient', validatorIdClient, getClient);
