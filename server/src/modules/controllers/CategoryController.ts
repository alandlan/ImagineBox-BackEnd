import { Request, Response } from "express";
import { container } from "tsyringe";

import { CategoryService } from "../services/CategoryService";

class CategoryController {
  async Create(request: Request, response: Response): Promise<Response> {
    const { Name, Description } = request.body;

    const categoryService = container.resolve(CategoryService);

    const category = await categoryService.Create({ Name, Description });

    return response.status(201).json(category);
  }

  async FindByName(request: Request, response: Response): Promise<Response> {
    const { Name } = request.query;

    const categoryService = container.resolve(CategoryService);

    const category = await categoryService.FindByName(Name as string);

    return response.status(200).json(category);
  }

  async FindById(request: Request, response: Response): Promise<Response> {
    const { Id } = request.params;

    const categoryService = container.resolve(CategoryService);

    const category = await categoryService.FindById(Id);

    return response.status(200).json(category);
  }

  async Update(request: Request, response: Response): Promise<Response> {
    const { Id } = request.params;
    const { Description, Name, IsActive } = request.body;

    const categoryService = container.resolve(CategoryService);

    const category = await categoryService.Update({
      Id,
      Name,
      Description,
      IsActive,
    });

    return response.status(202).json(category);
  }
}

export { CategoryController };
