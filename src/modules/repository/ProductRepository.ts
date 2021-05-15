import { getRepository, Raw, Repository } from "typeorm";

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
  async findByName(name: string): Promise<Product[]> {
    console.log(name);

    const products = await this.repostory.find({
      where: {
        name: Raw((alias) => `${alias} ILIKE '%${name}%'`),
      },
    });

    console.log(products);

    return products;
  }
  async findAll(): Promise<Product[]> {
    const products = await this.repostory.find();
    return products;
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
