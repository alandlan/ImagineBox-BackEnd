import { ICreateProductDTO } from "../../dtos/ICreateProductDto";
import { Product } from "../../models/Product";

interface IProductRepository {
  create({
    Name,
    Description,
    Price,
    CategoryId,
  }: ICreateProductDTO): Promise<Product>;
  findAll(): Promise<Product[]>;
  findById(id: string): Promise<Product | undefined>;
  findByName(name: string): Promise<Product[] | undefined>;
}

export { IProductRepository };
