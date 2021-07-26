import { ICreateCatalogueDTO } from "../../dtos/ICreateCatalogueDto";
import { Catalogue } from "../../models/Catalogue";

interface ICatalogueRepository {
  Create(Data: ICreateCatalogueDTO): Promise<Catalogue>;
  FindByName(Name: string): Promise<Catalogue>;
  FindById(Id: string): Promise<Catalogue>;
  FindByIds(Ids: string[]): Promise<Catalogue[]>;
  FindProducts(Id: string): Promise<Catalogue>;
}

export { ICatalogueRepository };
