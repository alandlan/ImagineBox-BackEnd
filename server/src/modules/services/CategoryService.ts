import { inject, injectable } from "tsyringe";

import { AppError } from "../../errors/AppError";
import { IUpdateCategory } from "../dtos/IUpdateCategory";
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

  async Create({ Name, Description }: IRequestCreate): Promise<Category> {
    const categoryExists = await this.categoryRepository.FindByName(Name);

    if (categoryExists) {
      throw new AppError("Categoria já existe!", 500);
    }

    const category = this.categoryRepository.Create({ Name, Description });

    return category;
  }

  async FindByName(Name: string): Promise<Category> {
    const category = await this.categoryRepository.FindByName(Name);

    return category;
  }

  async FindById(Id: string): Promise<Category> {
    const category = await this.categoryRepository.FindById(Id);

    return category;
  }

  async Update({
    Id,
    Description,
    IsActive,
    Name,
  }: IUpdateCategory): Promise<Category> {
    const category = await this.categoryRepository.FindById(Id);

    category.Description = Description;
    category.IsActive = IsActive;
    category.Name = Name;

    await this.categoryRepository.Update(category);

    return category;
  }
}

export { CategoryService };
