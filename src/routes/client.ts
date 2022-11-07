import { Router } from 'express';

import { validatorIdClient } from '../middleware';
import { getClientByIdDB } from '../services/client';

export const clientRouter = Router();

clientRouter.get('/get-client', validatorIdClient, getClientByIdDB);
