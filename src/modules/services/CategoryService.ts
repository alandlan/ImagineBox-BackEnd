import { inject, injectable } from "tsyringe";

import { AppError } from "../../errors/AppError";
import { Category } from "../models/Category";
import { ICategoryRepository } from "../repository/interface/ICategoryRepository";

interface IRequestCreate {
  Name: string;
  Description: string;
}

@injectable()
class CategoryService {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  async create({ Name, Description }: IRequestCreate): Promise<Category> {
    const categoryExists = await this.categoryRepository.findByName(Name);

    if (categoryExists) {
      throw new AppError("Categoria já existe!", 500);
    }

    const category = this.categoryRepository.create({ Name, Description });

    return category;
  }

  async findByName(Name: string): Promise<Category> {
    const category = await this.categoryRepository.findByName(Name);

    return category;
  }

  async findById(Id: string): Promise<Category> {
    const category = await this.categoryRepository.findById(Id);

    return category;
  }
}

export { CategoryService };
