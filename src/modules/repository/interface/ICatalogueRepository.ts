import { ICreateCatalogueDTO } from "../../dtos/ICreateCatalogueDto";
import { Catalogue } from "../../models/Catalogue";

interface ICatalogueRepository {
  create({ Name, Description }: ICreateCatalogueDTO): Promise<Catalogue>;
  findByName(Name: string): Promise<Catalogue>;
}

export { ICatalogueRepository };
