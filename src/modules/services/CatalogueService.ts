import { Catalogue } from "../models/Catalogue";
import { ICatalogueRepository } from "../repository/interface/ICatalogueRepository";

class CatalogueService {
  constructor(private catalogueRepository: ICatalogueRepository) {}

  async create(Name: string, Description: string): Promise<Catalogue> {
    const catalogue = await this.catalogueRepository.create(Name, Description);

    return catalogue;
  }
}

export { CatalogueService };
