import { getRepository, Repository } from "typeorm";

import { ICreateCatalogueDTO } from "../dtos/ICreateCatalogueDto";
import { Catalogue } from "../models/Catalogue";
import { ICatalogueRepository } from "./interface/ICatalogueRepository";

class CatalogueRepository implements ICatalogueRepository {
  private repository: Repository<Catalogue>;

  constructor() {
    this.repository = getRepository(Catalogue);
  }

  async create({ Name, Description }: ICreateCatalogueDTO): Promise<Catalogue> {
    const catalogue = await this.repository.create({
      Name,
      Description,
    });

    await this.repository.save(catalogue);

    return catalogue;
  }
  async findByName(Name: string): Promise<Catalogue> {
    const catalogue = await this.repository.findOne({ Name });
    return catalogue!;
  }
}

export { CatalogueRepository };
