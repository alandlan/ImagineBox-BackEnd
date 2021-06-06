import { AppError } from "../../errors/AppError";
import { ProductService } from "../../modules/services/ProductService";
import { ProductRepositoryInMemory } from "../repositories/ProductRepositoryInMemory";

let productRepositoryInMemory: ProductRepositoryInMemory;
let productService: ProductService;

describe("Create Product", () => {
  beforeEach(() => {
    productRepositoryInMemory = new ProductRepositoryInMemory();
    productService = new ProductService(productRepositoryInMemory);
  });

  it("should be able to create a new product", async () => {
    const product = await productService.create({
      Name: "Spider Man",
      Description: "Boneco do Spider Man.",
      Price: 59.99,
    });

    expect(product).toHaveProperty("Id");
  });

  it("should not be able to create a new product with out correct information", () => {
    expect(async () => {
      await productService.create({
        Name: "",
        Description: "Boneco do Spider Man.",
        Price: 59.99,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
