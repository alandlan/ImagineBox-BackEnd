import { Request, Response } from "express";
import { container } from "tsyringe";

import { CategoryService } from "../services/CategoryService";

class CategoryController {
  async create(request: Request, response: Response): Promise<Response> {
    const { Name, Description } = request.body;

    const categoryService = container.resolve(CategoryService);

    const category = await categoryService.create({ Name, Description });

    return response.status(201).json(category);
  }
}

export { CategoryController };
