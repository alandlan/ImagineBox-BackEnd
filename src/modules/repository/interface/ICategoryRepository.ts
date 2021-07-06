import { ICreateCategoryDTO } from "../../dtos/ICreateCategoryDto";
import { Category } from "../../models/Category";

interface ICategoryRepository {
  Create({ Name, Description }: ICreateCategoryDTO): Promise<Category>;
  FindByName(Name: string): Promise<Category>;
  FindById(Id: string): Promise<Category>;
  Update(Category: Category): Promise<Category>;
}

export { ICategoryRepository };
