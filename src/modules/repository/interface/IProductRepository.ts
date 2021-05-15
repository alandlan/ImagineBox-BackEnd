import { Product } from "../../models/Product";

interface ICreateProductDTO {
  name: string;
  description: string;
  price: number;
}

interface IProductRepository {
  create({ name, description, price }: ICreateProductDTO): Promise<void>;
  findAll(): Promise<Product[]>;
  findByName(name: string): Promise<Product[]>;
}

export { IProductRepository, ICreateProductDTO };
