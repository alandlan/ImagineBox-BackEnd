// import "reflect-metadata";
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
  CategoryId: string;
  Weight: string;
  Height: string;
  Width: string;
  Length: string;
  Format: string;
  Diameter: string;
}

interface IRequestAddImage {
  ProductId: string;
  ProductImage: string;
}

@injectable()
class ProductService {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) {}

  async FindById(id: string): Promise<Product | undefined> {
    const product = await this.productRepository.FindById(id);

    if (product === undefined)
      throw new AppError("Produto não localizado", 404);

    return product;
  }

  async FindByName(name: string): Promise<Product[] | undefined> {
    const products = await this.productRepository.FindByName(name);
    return products;
  }

  async Create({
    Name,
    Description,
    Price,
    CategoryId,
    Weight,
    Height,
    Width,
    Length,
    Format,
    Diameter,
  }: IRequestCreate): Promise<Product> {
    if (Name.length < 4 || Description.length < 4 || Price <= 0) {
      throw new AppError("Produto inválido!", 500);
    }

    const product = await this.productRepository.Create({
      Name,
      Description,
      Price,
      CategoryId,
      Weight,
      Height,
      Width,
      Length,
      Format,
      Diameter,
    });

    return product;
  }

  async AddImage({ ProductId, ProductImage }: IRequestAddImage): Promise<void> {
    const product = await this.productRepository.FindById(ProductId);

    if (!product) {
      throw new AppError("Produto não encontrado!", 404);
    }

    if (product.Img) {
      await deleteFile(`./tmp/product/${product.Img}`);
    }

    product.Img = ProductImage;

    await this.productRepository.Create(product);
  }

  async Update({
    id,
    name,
    description,
    price,
    isActive,
    weight,
    height,
    width,
    length,
    format,
    diameter,
  }: IUpdateProductDto): Promise<void> {
    const product = await this.productRepository.FindById(id);

    if (!product) {
      throw new AppError("Produto não encontrado!", 404);
    }

    product.Name = name;
    product.Description = description;
    product.Price = price;
    product.IsActive = isActive;
    product.Weight = weight;
    product.Height = height;
    product.Width = width;
    product.Length = length;
    product.Format = format;
    product.Diameter = diameter;

    await this.productRepository.Create(product);
  }
}

export { ProductService };
