import { inject, injectable } from "tsyringe";

import { AppError } from "../../errors/AppError";
import { ICreateCatalogueDTO } from "../dtos/ICreateCatalogueDto";
import { Catalogue } from "../models/Catalogue";
import { ICatalogueRepository } from "../repository/interface/ICatalogueRepository";
import { IProductRepository } from "../repository/interface/IProductRepository";

interface IRequestUpdateCatalogues {
  CatalogueId: string;
  ProductIds: string[];
}

@injectable()
class CatalogueService {
  constructor(
    @inject("CatalogueRepository")
    private catalogueRepository: ICatalogueRepository,
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) {}

  async Create({ Name, Description }: ICreateCatalogueDTO): Promise<Catalogue> {
    const catalogueExists = await this.FindByName(Name);

    if (catalogueExists) {
      throw new AppError("Categoria já existe!", 402);
    }

    const catalogue = await this.catalogueRepository.Create({
      Name,
      Description,
    });

    return catalogue;
  }

  async FindByName(Name: string): Promise<Catalogue> {
    const catalogue = await this.catalogueRepository.FindByName(Name);

    return catalogue;
  }

  async AddProducts({
    CatalogueId,
    ProductIds,
  }: IRequestUpdateCatalogues): Promise<Catalogue> {
    const catalogue = await this.catalogueRepository.FindProducts(CatalogueId);

    if (!catalogue) {
      throw new AppError("Catalogo não encontrado!", 404);
    }

    const products = await this.productRepository.FindByIds(ProductIds);

    if (!products || products.length !== ProductIds.length) {
      throw new AppError("Produto(s) não encontrado!", 404);
    }

    products.forEach((product) => {
      catalogue.Products.push(product);
    });

    const catalogueUpdated = await this.catalogueRepository.Create(catalogue);

    return catalogueUpdated;
  }

  async RemoveProducts({
    CatalogueId,
    ProductIds,
  }: IRequestUpdateCatalogues): Promise<Catalogue> {
    const catalogue = await this.catalogueRepository.FindProducts(CatalogueId);

    if (!catalogue) {
      throw new AppError("Catalogo não encontrado!", 404);
    }

    const products = await this.productRepository.FindByIds(ProductIds);

    if (!products || products.length !== ProductIds.length) {
      throw new AppError("Produto(s) não encontrado!", 404);
    }

    products.forEach((product) => {
      catalogue.Products.forEach((cProduct, indexCatalogueProduct) => {
        if (cProduct.Id === product.Id)
          catalogue.Products.splice(indexCatalogueProduct, 1);
      });
    });

    const catalogueUpdated = await this.catalogueRepository.Create(catalogue);

    return catalogueUpdated;
  }

  async FindProducts(Id: string): Promise<Catalogue> {
    const catalogue = await this.catalogueRepository.FindProducts(Id);

    if (!catalogue) {
      throw new AppError("Catalogo não encontrado!", 404);
    }

    return catalogue;
  }
}

export { CatalogueService };
