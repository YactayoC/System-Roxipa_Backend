import { Router } from 'express';

import { validatorIdProduct } from '../middleware';
import { getProduct, getProducts } from '../controllers/product';

export const productRouter = Router();

productRouter.get('/get-products', getProducts);
productRouter.get('/get-product/:idProduct', validatorIdProduct, getProduct);
