import { Response, Request } from "express";
import { container } from "tsyringe";

import { ProductService } from "../services/ProductService";

class ProductController {
  async Create(request: Request, response: Response): Promise<Response> {
    const { name, description, price } = request.body;

    console.log("aqui3");

    const productService = container.resolve(ProductService);

    await productService.create({ name, description, price });

    return response.status(201).send();
  }
}

export { ProductController };
