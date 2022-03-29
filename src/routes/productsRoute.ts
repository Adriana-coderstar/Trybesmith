import { Router } from 'express';

import productController from '../controllers/productController';
import productValidate from '../middlewares/productValidate';

const routes = Router();

routes.get('/', productController.getProducts);

routes.post('/', productValidate, productController.addProducts);

export default routes;