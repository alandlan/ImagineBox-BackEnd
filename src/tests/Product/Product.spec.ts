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

  it("should be able to update a product", async () => {
    const product = await productService.create({
      Name: "Spider Man",
      Description: "Boneco do Spider Man.",
      Price: 59.99,
    });

    product.Name = "Mario Brother";

    await productService.update({
      id: product.Id,
      price: product.Price,
      description: product.Description,
      isActive: product.IsActive,
      name: product.Name,
    });

    const productUpdated = await productService.findByName("Mario");

    if (!productUpdated) {
      throw new AppError("produto não encontrado!", 401);
    }

    expect(productUpdated[0].Name).toEqual(product.Name);
  });

  it("should not be able to update a product with Id incorrect", async () => {
    expect(async () => {
      await productService.update({
        name: "Teste",
        description: "Teste",
        isActive: false,
        price: 99,
        id: "abc",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
