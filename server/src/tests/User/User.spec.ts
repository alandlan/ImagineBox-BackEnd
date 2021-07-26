import { UserService } from "../../modules/services/UserService";
import { UserRepositoryInMemory } from "../repositories/UserRepositoryInMenory";

let userRepository: UserRepositoryInMemory;
let userService: UserService;

describe("Create User", () => {
  beforeEach(() => {
    userRepository = new UserRepositoryInMemory();
    userService = new UserService(userRepository);
  });

  it("should by able to create a new user", async () => {
    await userService.Create({
      name: "admin",
      password: "1234",
      email: "admin@admin.com.br",
      documentType: "CNPJ",
      document: "12345678901234",
      phone: "1112345678",
      mobile: "11123456789",
    });

    const user = await userService.FindByEmail("admin@admin.com.br");

    expect(user).toHaveProperty("Id");
  });

  it("should by able to update user", async () => {
    await userService.Create({
      name: "admin2",
      password: "1234",
      email: "admin2@admin.com.br",
      documentType: "CNPJ",
      document: "12345678901234",
      phone: "1112345678",
      mobile: "11123456789",
    });

    const userCreated = await userService.FindByEmail("admin2@admin.com.br");

    const user = await userService.Update({
      id: userCreated.Id,
      phone: "1199999999",
      mobile: "11999999999",
    });

    expect(user.Mobile).toEqual("11999999999");
  });
});
