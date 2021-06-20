import { Response, Request } from "express";
import { container } from "tsyringe";

import { AppError } from "../../errors/AppError";
import { ProductService } from "../services/ProductService";

class ProductController {
  async FindByName(request: Request, response: Response): Promise<Response> {
    const { Name } = request.query;

    if (!Name) {
      return response.status(401).send({ message: "Produto não localizado!" });
    }

    const productService = container.resolve(ProductService);

    const products = await productService.FindByName(Name as string);

    return response.status(200).json(products);
  }

  async FindById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const productService = container.resolve(ProductService);

    const product = await productService.FindById(id);

    return response.status(200).json(product);
  }

  async Create(request: Request, response: Response): Promise<Response> {
    const { name, description, price, categoryId } = request.body;

    const productService = container.resolve(ProductService);

    const product = await productService.Create({
      Name: name,
      Description: description,
      Price: price,
      CategoryId: categoryId,
    });

    return response.status(201).json(product);
  }

  async AddImage(request: Request, response: Response): Promise<Response> {
    const { product_id } = request.query;
    const product_file = request.file.filename;

    const productService = container.resolve(ProductService);

    await productService.AddImage({
      ProductId: product_id as string,
      ProductImage: product_file,
    });

    return response.status(204).send();
  }

  async Update(request: Request, response: Response): Promise<Response> {
    const { id, name, description, price, isActive } = request.body;

    if (!id) {
      throw new AppError("Faltou informar o Id do Produto!", 404);
    }

    const productService = container.resolve(ProductService);

    await productService.Update({ id, name, description, price, isActive });

    return response.status(200).send();
  }
}

export { ProductController };
