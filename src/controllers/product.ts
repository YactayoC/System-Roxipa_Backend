import { Request, Response } from 'express';
import { getProductByIdDB, getProductsDB } from '../services/product';

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

export { getProducts, getProduct };
