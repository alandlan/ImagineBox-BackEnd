import { AppError } from "../../errors/AppError";
import { ICreateUserDTO } from "../../modules/dtos/ICreateUserDto";
import { IUpdateUserDTO } from "../../modules/dtos/IUpdateUserDto";
import { User } from "../../modules/models/User";
import { IUserRepository } from "../../modules/repository/interface/IUserRepository";

class UserRepositoryInMemory implements IUserRepository {
  users: User[] = [];

  async Update({ id, phone, mobile }: IUpdateUserDTO): Promise<User> {
    const user = this.users.find((u) => u.Id === id);

    if (!user) {
      throw new AppError("Usuário não localizado!", 404);
    }

    const userIndex = this.users.findIndex((u) => u.Id === id);

    user.Mobile = mobile;
    user.Phone = phone;

    this.users.splice(userIndex, 1);

    this.users.push(user);

    return user;
  }

  async Create({
    name,
    email,
    password,
    documentType,
    document,
  }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      Email: email,
      Name: name,
      Password: password,
      DocumentType: documentType,
      Document: document,
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
