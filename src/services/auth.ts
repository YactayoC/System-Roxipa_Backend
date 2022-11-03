import { UserLogin } from '../interfaces';
import User from '../models/User';

export const loginDB = async (dataLogin: UserLogin) => {
  const user = new User();
  user.email = 'sebastian@gmail.com';
  user.password = 'sebaspro';
  user.save();

  return dataLogin;
};
