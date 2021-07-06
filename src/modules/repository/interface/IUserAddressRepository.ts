import { ICreateUserAddressDTO } from "../../dtos/ICreateUserAddressDto";
import { UserAddress } from "../../models/UserAddress";

interface IUserAddressRepository {
  Create(Data: ICreateUserAddressDTO): Promise<UserAddress>;
  FindByUserId(userId: string): Promise<UserAddress[]>;
}

export { IUserAddressRepository };
