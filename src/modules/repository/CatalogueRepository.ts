import { getRepository, Repository } from "typeorm";

import { ICreateCatalogueDTO } from "../dtos/ICreateCatalogueDto";
import { Catalogue } from "../models/Catalogue";
import { ICatalogueRepository } from "./interface/ICatalogueRepository";

class CatalogueRepository implements ICatalogueRepository {
  private repository: Repository<Catalogue>;

  constructor() {
    this.repository = getRepository(Catalogue);
  }

  async Create({
    Name,
    Description,
    Products,
    Id,
  }: ICreateCatalogueDTO): Promise<Catalogue> {
    const catalogue = await this.repository.create({
      Id,
      Name,
      Description,
      Products,
    });

    await this.repository.save(catalogue);

    return catalogue;
  }
  async FindByName(Name: string): Promise<Catalogue> {
    const catalogue = await this.repository.findOne({ Name });
    return catalogue!;
  }
  async FindById(Id: string): Promise<Catalogue> {
    const catalogue = await this.repository.findOne(Id);
    return catalogue!;
  }
  async FindByIds(Ids: string[]): Promise<Catalogue[]> {
    const catalogues = await this.repository.findByIds(Ids);
    return catalogues;
  }
  async FindProducts(Id: string): Promise<Catalogue> {
    const catalogue = await this.repository
      .createQueryBuilder("c")
      .leftJoinAndSelect("c.Products", "Products")
      .where("c.Id = :Id", { Id })
      .getOne();

    return catalogue!;
  }
}

export { CatalogueRepository };
