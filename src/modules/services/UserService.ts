import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../errors/AppError";
import { ICreateUserDTO } from "../dtos/ICreateUserDto";
import { User } from "../models/User";
import { IUserRepository } from "../repository/interface/IUserRepository";

@injectable()
class UserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async FindByEmail(email: string): Promise<User> {
    const user = await this.userRepository.FindByEmail(email);

    return user;
  }

  async Create({ name, password, email }: ICreateUserDTO): Promise<void> {
    const user = await this.userRepository.FindByEmail(email);

    if (user) {
      throw new AppError("User already exists!", 400);
    }

    const passwordHash = await hash(password, 8);

    await this.userRepository.Create({ name, password: passwordHash, email });
  }
}

export { UserService };
