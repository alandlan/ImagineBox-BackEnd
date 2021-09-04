/* eslint-disable import-helpers/order-imports */
import { AppError } from "../../errors/AppError";
import { CatalogueService } from "../../modules/services/CatalogueService";
import { CatalogueRepositoryInMemory } from "../repositories/CatalogueRepositoryInMemory";

let catalogueRepository: CatalogueRepositoryInMemory;
let catalogueService: CatalogueService;

describe("Create a Catalogue", () => {
  beforeEach(() => {
    catalogueRepository = new CatalogueRepositoryInMemory();
    catalogueService = new CatalogueService(catalogueRepository);
  });

  it("should be able to create a new catalogue", async () => {
    const catalogue = await catalogueService.create(
      "Vitrine",
      "Produtos em Destaque!"
    );

    expect(catalogue).toHaveProperty("Id");
  });

  it("should not be able to create a new cataloque if already exists same Name!", async () => {
    expect(async () => {
      await catalogueService.create("Vitrine", "Produtos em Destaque!");
      await catalogueService.create("Vitrine", "Produtos em Destaque!");
    }).rejects.toBeInstanceOf(AppError);
  });
});
