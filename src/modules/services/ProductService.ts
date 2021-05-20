import { inject, injectable } from "tsyringe";

import { AppError } from "../../errors/AppError";
import { deleteFile } from "../../utils/file";
import { IUpdateProductDto } from "../dtos/IUpdateProductDto";
import { Product } from "../models/Product";
import { IProductRepository } from "../repository/interface/IProductRepository";

interface IRequestCreate {
  Name: string;
  Description: string;
  Price: number;
}

interface IRequestAddImage {
  product_id: string;
  product_image: string;
}

@injectable()
class ProductService {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) {}
  async findByName(name: string): Promise<Product[]> {
    const products = await this.productRepository.findByName(name);
    return products;
  }

  async create({ Name, Description, Price }: IRequestCreate): Promise<void> {
    this.productRepository.create({ Name, Description, Price });
  }

  async addImage({
    product_id,
    product_image,
  }: IRequestAddImage): Promise<void> {
    const product = await this.productRepository.findById(product_id);

    if (!product) {
      throw new AppError("Produto não encontrado!", 404);
    }

    if (product.Img) {
      await deleteFile(`./tmp/product/${product.Img}`);
    }

    product.Img = product_image;

    await this.productRepository.create(product);
  }

  async update({
    id,
    name,
    description,
    price,
    isActive,
  }: IUpdateProductDto): Promise<void> {
    const product = await this.productRepository.findById(id);

    if (!product) {
      throw new AppError("Produto não encontrado!", 404);
    }

    product.Name = name;
    product.Description = description;
    product.Price = price;
    product.IsActive = isActive;

    await this.productRepository.create(product);
  }
}

export { ProductService };
