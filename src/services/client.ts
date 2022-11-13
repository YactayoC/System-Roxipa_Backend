import { IClient } from '../interfaces';
import { Client } from '../models';

export const registerClientDB = async (dataRegister: IClient): Promise<IClient> => {
  const client = new Client(dataRegister);
  client.save();
  return client;
};

export const getClientByIdUserDB = async (idUser: string): Promise<IClient | null> => {
  const client = await Client.findOne({"user": idUser}).populate('user');
  return client;
}

export const getClientByIdDB = async (id: string): Promise<IClient | null> => {
  const client = await Client.findById(id).populate('user').select('-updatedAt -createdAt -__v');
  return client;
};

export const getClientsDB = async (): Promise<IClient[]> => {
  const clients = await Client.find().populate('user').select('-updatedAt -createdAt -__v');
  return clients;
}
