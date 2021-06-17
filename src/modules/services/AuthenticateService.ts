import "reflect-metadata";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../errors/AppError";
import { IUserRepository } from "../repository/interface/IUserRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async Authenticate({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.FindByEmail(email);

    if (!user) {
      throw new AppError("Usuário ou Senha Inválidos!", 500);
    }

    const passwordMatch = await compare(password, user.Password);

    if (!passwordMatch) {
      throw new AppError("Usuário ou Senha Inválidos!", 500);
    }

    const token = sign({}, "b3438d429eb95e919beea64a56c14bae", {
      subject: user.Id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.Name,
        email: user.Email,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateService };
