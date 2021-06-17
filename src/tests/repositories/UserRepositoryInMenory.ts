import { ICreateUserDTO } from "../../modules/dtos/ICreateUserDto";
import { User } from "../../modules/models/User";
import { IUserRepository } from "../../modules/repository/interface/IUserRepository";

class UserRepositoryInMemory implements IUserRepository {
  users: User[] = [];

  async Create({ name, email, password }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      Email: email,
      Name: name,
      Password: password,
    });

    this.users.push(user);
  }
  async FindByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find((u) => u.Email === email);

    return user;
  }
  async FindById(id: string): Promise<User | undefined> {
    const user = this.users.find((u) => u.Id === id);

    return user;
  }
}

export { UserRepositoryInMemory };
