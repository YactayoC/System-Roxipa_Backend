import { IClient } from '../interfaces';
import { Client } from '../models';

export const registerClientDB = async (dataRegister: IClient): Promise<IClient> => {
  const client = new Client(dataRegister);
  client.save();
  return client;
};
