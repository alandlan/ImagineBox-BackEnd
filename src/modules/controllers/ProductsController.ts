import { Request, Response } from "express";
import { container } from "tsyringe";

import { ProductsService } from "../services/ProductsService";

class ProductsController {
  async findAll(request: Request, response: Response): Promise<Response> {
    const productService = container.resolve(ProductsService);

    const products = await productService.findAll();

    return response.json(products);
  }
}

export { ProductsController };
