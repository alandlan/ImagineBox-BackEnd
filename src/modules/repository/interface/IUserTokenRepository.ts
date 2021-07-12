import { ICreateUserTokenDTO } from "../../dtos/ICreateUserTokenDto";
import { UserToken } from "../../models/UserToken";

interface IUserTokenRepository {
  Create(Date: ICreateUserTokenDTO): Promise<UserToken>;
}

export { IUserTokenRepository };
