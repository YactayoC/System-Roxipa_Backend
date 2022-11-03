type Role = 'Client' | 'Adnin';

export interface User {
  ruc: string;
  password: string;
  role: Role;
  isConfirm: boolean;
  key: string;
}
