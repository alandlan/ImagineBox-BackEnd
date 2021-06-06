import { ICreateProductDTO } from "../../modules/dtos/ICreateProductDto";
import { Product } from "../../modules/models/Product";
import { IProductRepository } from "../../modules/repository/interface/IProductRepository";

class ProductRepositoryInMemory implements IProductRepository {
  products: Product[] = [];

  async create({
    Name,
    Description,
    Price,
  }: ICreateProductDTO): Promise<Product> {
    const product = new Product();

    Object.assign(product, { Name, Description, Price });

    this.products.push(product);

    return product;
  }
  async findAll(): Promise<Product[]> {
    const { products } = this;
    return products;
  }
  async findById(id: string): Promise<Product | undefined> {
    const product = this.products.find((p) => p.Id === id);

    return product;
  }
  async findByName(name: string): Promise<Product[] | undefined> {
    const products = this.products.filter((p) => p.Name.includes(name));

    return products;
  }
}

export { ProductRepositoryInMemory };
