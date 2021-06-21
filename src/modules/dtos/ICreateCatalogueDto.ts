import { Product } from "../models/Product";

interface ICreateCatalogueDTO {
  Id?: string;
  Name: string;
  Description: string;
  Products?: Product[];
}

export { ICreateCatalogueDTO };
