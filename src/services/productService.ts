import prisma from '../models/prismaClient';

class ProductService {
  getProducts = async () => {
    const result = await prisma.product.findMany();
    return { code: 200, result };
  };
}

export default new ProductService();