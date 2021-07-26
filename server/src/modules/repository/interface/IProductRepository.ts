import { ICreateProductDTO } from "../../dtos/ICreateProductDto";
import { Product } from "../../models/Product";

interface IProductRepository {
  Create(Data: ICreateProductDTO): Promise<Product>;
  FindAll(): Promise<Product[]>;
  FindById(id: string): Promise<Product | undefined>;
  FindByName(name: string): Promise<Product[] | undefined>;
  FindByIds(Ids: string[]): Promise<Product[]>;
}

export { IProductRepository };
