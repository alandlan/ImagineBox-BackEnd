import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../dtos/ICreateUserDto";
import { User } from "../models/User";
import { IUserRepository } from "./interface/IUserRepository";

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async FindById(id: string): Promise<User> {
    const user = await this.repository.findOne({ Id: id });

    return user;
  }

  async FindByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ Email: email });

    return user;
  }

  async Create({ name, email, password }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      Name: name,
      Email: email,
      Password: password,
      IsAdmin: false,
    });

    await this.repository.save(user);
  }
}

export { UserRepository };
