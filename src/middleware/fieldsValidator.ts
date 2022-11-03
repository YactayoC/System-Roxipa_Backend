import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { check } from 'express-validator';

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

export const validatorFieldsLogin = [
  check('fullname', 'The name is required').trim().not().isEmpty(),
  check('phone', 'The phone is required and must be numeric.').not().isEmpty().isNumeric(),
  check('direction', 'The direction is required').trim().not().isEmpty(),
  check('email', 'The email is not valid').isEmail(),
  check('password', 'The password must be at least 6 characters').trim().isLength({ min: 6 }),
  fieldsValidator,
];

export const validatorFieldsRegister = [
  check('fullname', 'The name is required').trim().not().isEmpty(),
  check('phone', 'The phone is required and must be numeric.').not().isEmpty().isNumeric(),
  check('direction', 'The direction is required').trim().not().isEmpty(),
  check('email', 'The email is not valid').isEmail(),
  check('password', 'The password must be at least 6 characters').trim().isLength({ min: 6 }),
  fieldsValidator,
];
