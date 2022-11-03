type Role = 'Client' | 'Adnin';

export interface User {
  email: string;
  password: string;
  role: Role;
  isConfirm: boolean;
  key: string;
}

export interface UserLogin {
  email: string;
  password: string;
}
