import { AuthLogin } from '../interfaces';
import User from '../models/User';

export const loginDB = async (dataLogin: AuthLogin) => {
  const user = new User();
  user.ruc = '74433077';
  user.password = "sebaspro"
  user.save();

  return dataLogin;
};
