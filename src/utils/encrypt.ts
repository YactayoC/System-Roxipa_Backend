import bcrypt from 'bcryptjs';

export const hashPassword = (password: string) => {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
};

export const comparePassword = (password: string, hashPassword: string) => {
  return bcrypt.compareSync(password, hashPassword);
};
