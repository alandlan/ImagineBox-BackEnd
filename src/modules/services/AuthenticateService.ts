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
      expires_in_token,
      secret_token,
      secret_refresh_token,
      expires_int_refresh_token,
      expires_refresh_token_days,
    } = auth;

    if (!user) {
      throw new AppError("Usuário ou Senha Inválidos!", 500);
    }

    const passwordMatch = await compare(password, user.Password);

    if (!passwordMatch) {
      throw new AppError("Usuário ou Senha Inválidos!", 500);
    }

    const token = sign({}, secret_token, {
      subject: user.Id,
      expiresIn: expires_in_token,
    });

    const refreshToken = sign({ email }, secret_refresh_token, {
      subject: user.Id,
      expiresIn: expires_int_refresh_token,
    });

    const refreshTokenExpiresDate = this.dayjsDateProvider.AddDays(
      expires_refresh_token_days
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
