import { check } from 'express-validator';
import { fieldsValidator } from './fieldsValidator';

export const validatorIdClient = [
  check('idClient', 'The id is not valid').isMongoId(),
  fieldsValidator,
];
