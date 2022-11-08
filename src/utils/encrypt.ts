import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const hashPassword = (password: string) => {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
};

export const comparePassword = (password: string, hashPassword: string) => {
  return bcrypt.compareSync(password, hashPassword);
};

export const generateJWT = (id: string, email: string) => {
  return new Promise((resolve, reject) => {
    const payload = { id, email };
    jwt.sign(
      payload,
      process.env.JWT_SECRET || '',
      {
        expiresIn: '24h',
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject('Could not generate token');
        } else {
          resolve(token);
        }
      }
    );
  });
};
