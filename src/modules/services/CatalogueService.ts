import { inject, injectable } from "tsyringe";

import { AppError } from "../../errors/AppError";
import { ICreateCatalogueDTO } from "../dtos/ICreateCatalogueDto";
import { Catalogue } from "../models/Catalogue";
import { ICatalogueRepository } from "../repository/interface/ICatalogueRepository";

@injectable()
class CatalogueService {
  constructor(
    @inject("CatalogueRepository")
    private catalogueRepository: ICatalogueRepository
  ) {}

  async create({ Name, Description }: ICreateCatalogueDTO): Promise<Catalogue> {
    const catalogueExists = await this.findByName(Name);

    if (catalogueExists) {
      throw new AppError("Categoria já existe!", 402);
    }

    const catalogue = await this.catalogueRepository.create({
      Name,
      Description,
    });

    return catalogue;
  }

  async findByName(Name: string): Promise<Catalogue> {
    const catalogue = await this.catalogueRepository.findByName(Name);

    return catalogue;
  }
}

export { CatalogueService };
