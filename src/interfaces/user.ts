type Role = 'Client' | 'Adnin';

export interface IUser {
  _id: string;
  email: string;
  password: string;
  role: Role;
  isConfirm: boolean;
  key: string;
}

export interface IUserAuth {
  email: string;
  password: string;
}
