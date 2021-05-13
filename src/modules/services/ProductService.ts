import { inject, injectable } from "tsyringe";

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
  ) {
    console.log("aqui2");
  }

  async create({ name, description, price }: IRequestCreate): Promise<void> {
    console.log("aqui2");
    this.productRepository.create({ name, description, price });
  }
}

export { ProductService };
