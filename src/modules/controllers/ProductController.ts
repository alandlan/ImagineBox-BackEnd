import { Response, Request } from "express";
import { container } from "tsyringe";

import { ProductService } from "../services/ProductService";

class ProductController {
  async findAll(request: Request, response: Response): Promise<Response> {
    const productService = container.resolve(ProductService);

    const products = await productService.findAll();

    console.log(products);

    return response.json(products);
  }

  async findByName(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    if (!name) {
      return response.status(401).send({ message: "Produto não localizado!" });
    }

    const productService = container.resolve(ProductService);

    const products = await productService.findByName(name);
    console.log(products);

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
