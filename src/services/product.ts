import { IProduct } from '../interfaces';
import { Product } from '../models';

export const getProductsDB = async (): Promise<IProduct[] | null> => {
  const products = await Product.find();
  return products;
}

export const getProductByIdDB = async (id: string): Promise<IProduct | null> => {
  const product = await Product.findById(id);
  return product;
}
