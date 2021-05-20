import { getRepository, Raw, Repository } from "typeorm";

import { ICreateProductDTO } from "../dtos/ICreateProductDto";
import { Product } from "../models/Product";
import { IProductRepository } from "./interface/IProductRepository";

class ProductRepository implements IProductRepository {
  private repostory: Repository<Product>;

  constructor() {
    this.repostory = getRepository(Product);
  }

  async findById(id: string): Promise<Product> {
    const product = await this.repostory.findOne(id);

    return product;
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

  async create({
    Name,
    Description,
    Price,
    Img,
    Id,
    IsActive,
  }: ICreateProductDTO): Promise<void> {
    const product = this.repostory.create({
      Name,
      Description,
      Price,
      Img,
      Id,
      IsActive,
    });

    await this.repostory.save(product);
  }
}

export { ProductRepository };
