import { check } from 'express-validator';
import { fieldsValidator } from './fieldsValidator';

export const validatorIdClient = [
  check('id', 'The id is not valid').isMongoId(),
  fieldsValidator,
];
