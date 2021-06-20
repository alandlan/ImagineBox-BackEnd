import { container } from "tsyringe";

import { CatalogueRepository } from "../../modules/repository/CatalogueRepository";
import { CategoryRepository } from "../../modules/repository/CategoryRepository";
import { ICatalogueRepository } from "../../modules/repository/interface/ICatalogueRepository";
import { ICategoryRepository } from "../../modules/repository/interface/ICategoryRepository";
import { IProductRepository } from "../../modules/repository/interface/IProductRepository";
import { IUserRepository } from "../../modules/repository/interface/IUserRepository";
import { ProductRepository } from "../../modules/repository/ProductRepository";
import { UserRepository } from "../../modules/repository/UserRepository";

container.registerSingleton<IProductRepository>(
  "ProductRepository",
  ProductRepository
);

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository
);

container.registerSingleton<ICatalogueRepository>(
  "CatalogueRepository",
  CatalogueRepository
);
