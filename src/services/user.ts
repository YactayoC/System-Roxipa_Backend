import { IUser, IUserAuth } from '../interfaces';
import { User } from '../models';
import { hashPassword } from '../utils';

export const registerUserDB = async (dataRegister: IUserAuth): Promise<IUser> => {
  const user = new User();
  const { email, password } = dataRegister;

  user.email = email;
  user.password = hashPassword(password);
  user.save();
  return user;
};

export const getUserByEmail = async (email: string): Promise<IUser | null> => {
  const user = await User.findOne({ email });
  return user;
}
