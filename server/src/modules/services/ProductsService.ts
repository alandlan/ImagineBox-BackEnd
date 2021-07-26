// import "reflect-metadata";
import { inject, injectable } from "tsyringe";

import { Product } from "../models/Product";
import { IProductRepository } from "../repository/interface/IProductRepository";

@injectable()
class ProductsService {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) {}

  async FindAll(): Promise<Product[]> {
    const products = await this.productRepository.FindAll();
    return products;
  }
}

export { ProductsService };
