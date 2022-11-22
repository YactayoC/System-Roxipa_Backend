import { Router } from 'express';

import { validatorIdProduct } from '../middleware';
import { getProduct, getProducts, updateProduct, deleteProduct } from '../controllers/product';

export const productRouter = Router();

productRouter.get('/get-products', getProducts);
productRouter.get('/get-product/:idProduct', validatorIdProduct, getProduct);
productRouter.put('/update-product/:idProduct', validatorIdProduct, updateProduct);
productRouter.put('/delete-product/:idProduct', validatorIdProduct, deleteProduct);
