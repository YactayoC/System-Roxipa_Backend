import { Request, Response } from 'express';
import { deleteProductDB, getProductByIdDB, getProductsDB, updateProductDB } from '../services/product';

const getProducts = async (_req: Request, res: Response) => {
  try {
    const products = await getProductsDB();
    return res.status(201).json({ hasError: false, products });
  } catch (error) {
    return res.status(500).json({ hasError: true, msg: 'Internal server error' });
  }
};

const getProduct = async (req: Request, res: Response) => {
  const { idProduct } = req.params;

  try {
    const product = await getProductByIdDB(idProduct);

    if (!product) {
      return res.status(404).json({
        hasError: true,
        message: 'Product not found',
      });
    }

    return res.status(201).json({ hasError: false, product });
  } catch (error) {
    return res.status(500).json({ hasError: true, msg: 'Internal server error' });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  const { idProduct } = req.params;
  const { ...data } = req.body;

  try {
    const product = await updateProductDB(idProduct, data);
    return res.status(200).json({ hasError: false, product, msg: 'Product updated' });
  } catch (error) {
    return res.status(500).json({ hasError: true, msg: 'Internal server error' });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  const { idProduct } = req.params;

  try {
    const product = await deleteProductDB(idProduct);
    return res.status(200).json({ hasError: false, product, msg: 'Product deleted' });
  } catch (error) {
    return res.status(500).json({ hasError: true, msg: 'Internal server error' });
  }
};

export { getProducts, getProduct, updateProduct, deleteProduct };
