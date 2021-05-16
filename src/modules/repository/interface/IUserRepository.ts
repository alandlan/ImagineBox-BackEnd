import { ICreateUserDTO } from "../../dtos/ICreateUserDto";
import { User } from "../../models/User";

interface IUserRepository {
  Create({ name, email, password }: ICreateUserDTO): Promise<void>;
  FindByEmail(email: string): Promise<User>;
}

export { IUserRepository };
