import { ICreateCategoryDTO } from "../../modules/dtos/ICreateCategoryDto";
import { Category } from "../../modules/models/Category";
import { ICategoryRepository } from "../../modules/repository/interface/ICategoryRepository";

class CategoryRepositoryInMemory implements ICategoryRepository {
  categories: Category[] = [];
  async findByName(name: string): Promise<Category> {
    return this.categories.find((c) => c.Name === name)!;
  }

  async create({ Name, Description }: ICreateCategoryDTO): Promise<Category> {
    const category = new Category();

    Object.assign(category, {
      Name,
      Description,
    });

    this.categories.push(category);

    return category;
  }
}

export { CategoryRepositoryInMemory };
