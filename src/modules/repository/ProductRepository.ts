import { getRepository, Raw, Repository } from "typeorm";

import { ICreateProductDTO } from "../dtos/ICreateProductDto";
import { Product } from "../models/Product";
import { IProductRepository } from "./interface/IProductRepository";

class ProductRepository implements IProductRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = getRepository(Product);
  }

  async FindById(id: string): Promise<Product | undefined> {
    const product = await this.repository
      .createQueryBuilder("p")
      .innerJoinAndSelect("p.Category", "Category")
      .leftJoinAndSelect("p.Catalogues", "Catalogue")
      .where("p.Id = :id", { id })
      .getOne();

    return product;
  }

  async FindByName(Name: string): Promise<Product[]> {
    // const products = await this.repository.find({
    //   relations: ["Category"],
    //   where: {
    //     Name: Raw((alias) => `${alias} ILIKE '%${Name}%'`),
    //   },
    // });
    const products = await this.repository
      .createQueryBuilder("p")
      .innerJoinAndSelect("p.Category", "Category")
      .where("p.Name like :name", { name: `%${Name}%` })
      .getMany();

    return products;
  }
  async FindAll(): Promise<Product[]> {
    const products = await this.repository.find({ relations: ["Category"] });
    return products;
  }

  async FindByIds(Ids: string[]): Promise<Product[]> {
    const products = await this.repository.findByIds(Ids);
    return products;
  }

  async Create({
    Name,
    Description,
    Price,
    CategoryId,
    Img,
    Id,
    IsActive,
  }: ICreateProductDTO): Promise<Product> {
    const product = this.repository.create({
      Name,
      Description,
      Price,
      CategoryId,
      Img,
      Id,
      IsActive,
    });

    await this.repository.save(product);

    return product;
  }
}

export { ProductRepository };
