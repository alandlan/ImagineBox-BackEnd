// import "reflect-metadata";
import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../errors/AppError";
import { ICreateUserDTO } from "../dtos/ICreateUserDto";
import { IUpdateUserDTO } from "../dtos/IUpdateUserDto";
import { User } from "../models/User";
import { IUserRepository } from "../repository/interface/IUserRepository";

@injectable()
class UserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async FindById(id: string): Promise<User> {
    const user = await this.userRepository.FindById(id);

    return user!;
  }

  async FindByEmail(email: string): Promise<User> {
    const user = await this.userRepository.FindByEmail(email);

    return user!;
  }

  async FindAll(): Promise<User[]> {
    const users = await this.userRepository.FindAll();

    return users;
  }

  async Create({
    name,
    password,
    email,
    documentType,
    document,
    phone,
    mobile,
  }: ICreateUserDTO): Promise<void> {
    const user = await this.userRepository.FindByEmail(email);

    if (user) {
      throw new AppError("User already exists!", 400);
    }

    const passwordHash = await hash(password, 8);

    await this.userRepository.Create({
      name,
      password: passwordHash,
      email,
      documentType,
      document,
      phone,
      mobile,
    });
  }

  async Update({ id, mobile, phone }: IUpdateUserDTO): Promise<User> {
    const user = await this.userRepository.Update({ id, phone, mobile });

    return user;
  }
}

export { UserService };
