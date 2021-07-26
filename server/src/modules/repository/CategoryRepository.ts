import { getRepository, Repository } from "typeorm";

import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDto";
import { Category } from "../models/Category";
import { ICategoryRepository } from "./interface/ICategoryRepository";

class CategoryRepository implements ICategoryRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async Update(category: Category): Promise<Category> {
    await this.repository.save(category);

    return category;
  }

  async FindById(Id: string): Promise<Category> {
    const category = await this.repository.findOne(Id);

    return category!;
  }

  async Create({ Name, Description }: ICreateCategoryDTO): Promise<Category> {
    const category = this.repository.create({ Name, Description });

    await this.repository.save(category);

    return category;
  }

  async FindByName(Name: string): Promise<Category> {
    const category = await this.repository.findOne({ Name });
    return category!;
  }
}

export { CategoryRepository };
