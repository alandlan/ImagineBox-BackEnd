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
  async findByName(Name: string): Promise<Product[]> {
    const products = await this.repostory.find({
      where: {
        Name: Raw((alias) => `${alias} ILIKE '%${Name}%'`),
      },
    });

    return products;
  }
  async findAll(): Promise<Product[]> {
    const products = await this.repostory.find();
    return products;
  }

  async create({ name, description, price }: ICreateProductDTO): Promise<void> {
    const product = this.repostory.create({
      Name: name,
      Description: description,
      Price: price,
    });

    await this.repostory.save(product);
  }
}

export { ProductRepository };
