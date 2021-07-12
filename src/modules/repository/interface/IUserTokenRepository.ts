import { ICreateUserTokenDTO } from "../../dtos/ICreateUserTokenDto";
import { UserToken } from "../../models/UserToken";

interface IUserTokenRepository {
  Create(Date: ICreateUserTokenDTO): Promise<UserToken>;
  DeleteById(Id: string): Promise<void>;
  FindByUserAndToken(UserId: string, RefreshToken: string): Promise<UserToken>;
}

export { IUserTokenRepository };
