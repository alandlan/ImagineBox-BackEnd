import { Request, Response } from "express";
import { container } from "tsyringe";

import { ProductsService } from "../services/ProductsService";

class ProductsController {
  async FindAll(request: Request, response: Response): Promise<Response> {
    const productsService = container.resolve(ProductsService);

    const products = await productsService.FindAll();

    return response.json(products);
  }
}

export { ProductsController };
