import jwt from 'jsonwebtoken';

export const generateJWT = (id: string, email: string, fullname: string) => {
  return new Promise((resolve, reject) => {
    const payload = { id, email, fullname };
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
