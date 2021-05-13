// import { Product } from "../../models/Products";

interface ICreateProductDTO {
  name: string;
  description: string;
  price: number;
}

interface IProductRepository {
  create({ name, description, price }: ICreateProductDTO): Promise<void>;
}

export { IProductRepository, ICreateProductDTO };
