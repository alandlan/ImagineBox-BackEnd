import { ICreateProductDTO } from "../../dtos/ICreateProductDto";
import { Product } from "../../models/Product";

interface IProductRepository {
  create(data: ICreateProductDTO): Promise<void>;
  findAll(): Promise<Product[]>;
  findById(id: string): Promise<Product>;
  findByName(name: string): Promise<Product[]>;
}

export { IProductRepository };
