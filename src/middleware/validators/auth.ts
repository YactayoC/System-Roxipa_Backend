import { check } from 'express-validator';
import { fieldsValidator } from './fieldsValidator';

export const validatorFieldsLogin = [
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
