import { Product } from "../models/Product";

interface ICreateCatalogueDTO {
  Name: string;
  Description: string;
  Products?: Product[];
}

export { ICreateCatalogueDTO };
