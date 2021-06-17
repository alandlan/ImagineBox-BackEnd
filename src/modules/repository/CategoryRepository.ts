import { getRepository, Repository } from "typeorm";

import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDto";
import { Category } from "../models/Category";
import { ICategoryRepository } from "./interface/ICategoryRepository";

class CategoryRepository implements ICategoryRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ Name, Description }: ICreateCategoryDTO): Promise<Category> {
    const category = this.repository.create({ Name, Description });

    await this.repository.save(category);

    return category;
  }

  async findByName(Name: string): Promise<Category> {
    const category = await this.repository.findOne({ Name });
    return category!;
  }
}

export { CategoryRepository };
