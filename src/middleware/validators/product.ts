import { check } from 'express-validator';
import { fieldsValidator } from './fieldsValidator';

export const validatorIdProduct = [
  check('idProduct', 'The id is not valid').isMongoId(),
  fieldsValidator,
];