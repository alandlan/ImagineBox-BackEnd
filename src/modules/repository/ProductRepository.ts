import { getRepository, Repository } from "typeorm";

import { Product } from "../models/Product";
import {
  ICreateProductDTO,
  IProductRepository,
} from "./interface/IProductRepository";

class ProductRepository implements IProductRepository {
  private repostory: Repository<Product>;

  constructor() {
    this.repostory = getRepository(Product);
  }

  async create({ name, description, price }: ICreateProductDTO): Promise<void> {
    const product = this.repostory.create({
      name,
      description,
      price,
    });

    await this.repostory.save(product);
  }
}

export { ProductRepository };
