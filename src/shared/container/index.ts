import { container } from "tsyringe";

import { IProductRepository } from "../../modules/repository/interface/IProductRepository";
import { ProductRepository } from "../../modules/repository/ProductRepository";

container.registerSingleton<IProductRepository>(
  "ProductRepository",
  ProductRepository
);
