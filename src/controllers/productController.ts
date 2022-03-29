import { Request, Response } from 'express';
import productService from '../services/productService';

class ProductController {
  getProducts = async (req: Request, res: Response) => {
    const { code, result } = await productService.getProducts();

    res.status(code).json(result);
  };
}

export default new ProductController();