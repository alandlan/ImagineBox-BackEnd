import { ICreateCategoryDTO } from "../../dtos/ICreateCategoryDto";
import { Category } from "../../models/Category";

interface ICategoryRepository {
  create({ Name, Description }: ICreateCategoryDTO): Promise<Category>;
  findByName(name: string): Promise<Category>;
  findById(id: string): Promise<Category>;
}

export { ICategoryRepository };
