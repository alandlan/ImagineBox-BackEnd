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
});
