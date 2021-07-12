// import "reflect-metadata";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import auth from "../../config/auth";
import { AppError } from "../../errors/AppError";
import { IDateProvider } from "../../shared/provider/DateProvider/IDateProvider/IDateProvider";
import { IUserRepository } from "../repository/interface/IUserRepository";
import { IUserTokenRepository } from "../repository/interface/IUserTokenRepository";

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
  refreshToken: string;
}

@injectable()
class AuthenticateService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository,
    @inject("UserTokenRepository")
    private userTokenRepository: IUserTokenRepository,
    @inject("DayjsDateProvider")
    private dayjsDateProvider: IDateProvider
  ) {}

  async Authenticate({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.FindByEmail(email);
    const {
      ExpiresInToken,
      SecretToken,
      SecretRefreshToken,
      ExpiresIntRefreshToken,
      ExpiresRefreshTokenDays,
    } = auth;

    if (!user) {
      throw new AppError("Usuário ou Senha Inválidos!", 500);
    }

    const passwordMatch = await compare(password, user.Password);

    if (!passwordMatch) {
      throw new AppError("Usuário ou Senha Inválidos!", 500);
    }

    const token = sign({}, SecretToken, {
      subject: user.Id,
      expiresIn: ExpiresInToken,
    });

    const refreshToken = sign({ email }, SecretRefreshToken, {
      subject: user.Id,
      expiresIn: ExpiresIntRefreshToken,
    });

    const refreshTokenExpiresDate = this.dayjsDateProvider.AddDays(
      ExpiresRefreshTokenDays
    );

    await this.userTokenRepository.Create({
      App: "WEB",
      ExpiresDate: refreshTokenExpiresDate,
      RefreshToken: refreshToken,
      UserId: user.Id,
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.Name,
        email: user.Email,
      },
      refreshToken,
    };

    return tokenReturn;
  }
}

export { AuthenticateService };
