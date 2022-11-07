import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';


export const fieldsValidator = (req: Request, res: Response, next: NextFunction): void | Object => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      hasError: true,
      errors: errors.mapped(),
    });
  }

  next();
};


