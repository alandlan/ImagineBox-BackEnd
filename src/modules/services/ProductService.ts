import { inject, injectable } from "tsyringe";

import { Product } from "../models/Product";
import { IProductRepository } from "../repository/interface/IProductRepository";

interface IRequestCreate {
  name: string;
  description: string;
  price: number;
}

@injectable()
class ProductService {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) {}
  async findByName(name: string): Promise<Product[]> {
    const products = await this.productRepository.findByName(name);
    return products;
  }

  async findAll(): Promise<Product[]> {
    const products = await this.productRepository.findAll();
    console.log("aqui3");
    return products;
  }

  async create({ name, description, price }: IRequestCreate): Promise<void> {
    this.productRepository.create({ name, description, price });
  }
}

export { ProductService };
