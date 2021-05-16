import { Response, Request } from "express";
import { container } from "tsyringe";

import { ProductService } from "../services/ProductService";

class ProductController {
  async findByName(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    if (!name) {
      return response.status(401).send({ message: "Produto não localizado!" });
    }

    const productService = container.resolve(ProductService);

    const products = await productService.findByName(name);

    return response.status(200).json(products);
  }

  async Create(request: Request, response: Response): Promise<Response> {
    const { name, description, price } = request.body;

    const productService = container.resolve(ProductService);

    await productService.create({ name, description, price });

    return response.status(201).send();
  }
}

export { ProductController };
