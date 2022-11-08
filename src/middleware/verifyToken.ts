import jwt from 'jsonwebtoken';
import { IPayloadJWT } from '../interfaces';

import { Request, Response, NextFunction } from 'express';


export const verifyToken = (req: Request, res: Response, next: NextFunction): void | Response => {
  const token = req.header('x-token');

  if (!token) {
    return res.status(401).json({ hasError: true, msg: 'No token provided' });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || '') as IPayloadJWT;
    req.userId = payload.id;
    next();
  } catch (error) {
    return res.status(401).json({ hasError: true, msg: 'Invalid token' });
  }
};