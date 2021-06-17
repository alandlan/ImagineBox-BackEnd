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
    });

    const user = await userService.FindByEmail("admin@admin.com.br");

    expect(user).toHaveProperty("Id");
  });
});
