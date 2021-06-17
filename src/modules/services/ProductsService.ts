import "reflect-metadata";
import { inject, injectable } from "tsyringe";

import { Product } from "../models/Product";
import { IProductRepository } from "../repository/interface/IProductRepository";

@injectable()
class ProductsService {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) {}

  async findAll(): Promise<Product[]> {
    const products = await this.productRepository.findAll();
    return products;
  }
}

export { ProductsService };
