import { AppError } from "../../errors/AppError";
import { Catalogue } from "../models/Catalogue";
import { ICatalogueRepository } from "../repository/interface/ICatalogueRepository";

class CatalogueService {
  constructor(private catalogueRepository: ICatalogueRepository) {}

  async create(Name: string, Description: string): Promise<Catalogue> {
    const catalogueExists = await this.findByName(Name);

    if (catalogueExists) {
      throw new AppError("Categoria já existe!", 500);
    }

    const catalogue = await this.catalogueRepository.create(Name, Description);

    return catalogue;
  }

  async findByName(Name: string): Promise<Catalogue> {
    const catalogue = await this.catalogueRepository.findByName(Name);

    return catalogue;
  }
}

export { CatalogueService };
