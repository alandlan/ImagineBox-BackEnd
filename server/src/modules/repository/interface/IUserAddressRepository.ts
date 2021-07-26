import { ICreateUserAddressDTO } from "../../dtos/ICreateUserAddressDto";
import { UserAddress } from "../../models/UserAddress";

interface IUserAddressRepository {
  Create(Data: ICreateUserAddressDTO): Promise<UserAddress>;
  FindAllByUserId(userId: string): Promise<UserAddress[]>;
  Delete(Id: string): Promise<void>;
  FindById(Id: string): Promise<UserAddress>;
}

export { IUserAddressRepository };
