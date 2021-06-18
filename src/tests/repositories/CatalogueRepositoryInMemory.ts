import { Catalogue } from "../../modules/models/Catalogue";
import { ICatalogueRepository } from "../../modules/repository/interface/ICatalogueRepository";

class CatalogueRepositoryInMemory implements ICatalogueRepository {
  catalogues: Catalogue[] = [];

  async create(Name: string, Description: string): Promise<Catalogue> {
    const catalogue = new Catalogue();

    Object.assign(catalogue, {
      Name,
      Description,
    });

    this.catalogues.push(catalogue);

    return catalogue;
  }

  async findByName(Name: string): Promise<Catalogue> {
    const catalogue = this.catalogues.find((c) => c.Name === Name);

    return catalogue!;
  }
}

export { CatalogueRepositoryInMemory };
