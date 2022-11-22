import { IProduct, IUpdateProduct } from '../interfaces';
import { Product } from '../models';

export const getProductsDB = async (): Promise<IProduct[] | null> => {
  const products = await Product.find();
  return products;
};

export const getProductByIdDB = async (id: string): Promise<IProduct | null> => {
  const product = await Product.findById(id);
  return product;
};

export const updateProductDB = async (id: string, data: IUpdateProduct): Promise<IProduct | null> => {
  const product = await Product.findOneAndUpdate({ _id: id }, data, { new: true });
  return product;
};

export const deleteProductDB = async (id: string): Promise<IProduct | null> => {
  const product = await Product.remove({ _id: id });
  return product;
};
