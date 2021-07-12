import { getRepository, Repository } from "typeorm";

import { ICreateUserTokenDTO } from "../dtos/ICreateUserTokenDto";
import { UserToken } from "../models/UserToken";
import { IUserTokenRepository } from "./interface/IUserTokenRepository";

class UserTokenRepository implements IUserTokenRepository {
  private repository: Repository<UserToken>;

  constructor() {
    this.repository = getRepository(UserToken);
  }
  async DeleteById(Id: string): Promise<void> {
    await this.repository.delete(Id);
  }
  async FindByUserAndToken(
    UserId: string,
    RefreshToken: string
  ): Promise<UserToken> {
    const userToken = await this.repository.findOne({ UserId, RefreshToken });

    return userToken!;
  }

  async Create({
    UserId,
    App,
    RefreshToken,
    ExpiresDate,
  }: ICreateUserTokenDTO): Promise<UserToken> {
    const userToken = this.repository.create({
      UserId,
      App,
      RefreshToken,
      ExpiresDate,
    });

    await this.repository.save(userToken);

    return userToken;
  }
}

export { UserTokenRepository };
