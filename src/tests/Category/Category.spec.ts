import { AppError } from "../../errors/AppError";
import { CategoryService } from "../../modules/services/CategoryService";
import { CategoryRepositoryInMemory } from "../repositories/CategoryRepositoryInMemory";

let categoryRepository: CategoryRepositoryInMemory;
let categoryService: CategoryService;

describe("Create Category", () => {
  beforeEach(() => {
    categoryRepository = new CategoryRepositoryInMemory();
    categoryService = new CategoryService(categoryRepository);

    categoryService.create({
      Name: "Papelaria",
      Description: "Artigos de Papelaria",
    });
  });

  it("should be able to create a new category", async () => {
    const category = await categoryService.create({
      Name: "Brinquedo",
      Description: "Brinquedo Colecionável",
    });

    expect(category).toHaveProperty("Id");
  });

  it("should not be able to create a new category if already exists with same name", async () => {
    expect(async () => {
      await categoryService.create({
        Name: "Papelaria",
        Description: "Artigos de Papelaria",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
