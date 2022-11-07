import { IClient } from '../interfaces';
import { Client } from '../models';

export const registerClientDB = async (dataRegister: IClient): Promise<IClient> => {
  const client = new Client(dataRegister);
  client.save();
  return client;
};

export const getClientByIdDB = async (id: string): Promise<IClient | null> => {
  const client = await Client.findById(id).populate('user');
  return client;
};
