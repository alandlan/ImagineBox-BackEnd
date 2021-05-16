import { ICreateProductDTO } from "../../dtos/ICreateProductDto";
import { Product } from "../../models/Product";

interface IProductRepository {
  create({ name, description, price }: ICreateProductDTO): Promise<void>;
  findAll(): Promise<Product[]>;
  findByName(name: string): Promise<Product[]>;
}

export { IProductRepository };
