import { Catalogue } from "../../models/Catalogue";

interface ICatalogueRepository {
  create(Name: string, Description: string): Promise<Catalogue>;
  findByName(Name: string): Promise<Catalogue>;
}

export { ICatalogueRepository };
