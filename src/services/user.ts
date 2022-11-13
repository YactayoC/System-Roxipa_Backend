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

export const getUserByEmailDB = async (email: string): Promise<IUser | null> => {
  const user = await User.findOne({ email });
  return user;
}

export const getUserByKeyDB = async (key: string): Promise<IUser | null> => {
  const user = await User.findOne({ key });
  return user;
}

export const confirmUserDB = async (id: string): Promise<IUser | null> => {
  const user = await User.findByIdAndUpdate(id, { isConfirm: true }, { new: true });
  return user;
}
