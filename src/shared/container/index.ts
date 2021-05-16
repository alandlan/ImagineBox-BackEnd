import { container } from "tsyringe";

import { IProductRepository } from "../../modules/repository/interface/IProductRepository";
import { IUserRepository } from "../../modules/repository/interface/IUserRepository";
import { ProductRepository } from "../../modules/repository/ProductRepository";
import { UserRepository } from "../../modules/repository/UserRepository";

container.registerSingleton<IProductRepository>(
  "ProductRepository",
  ProductRepository
);

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
