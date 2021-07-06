import { inject, injectable } from "tsyringe";

import { ICreateUserAddressDTO } from "../dtos/ICreateUserAddressDto";
import { UserAddress } from "../models/UserAddress";
import { IUserAddressRepository } from "../repository/interface/IUserAddressRepository";

@injectable()
class UserAddressService {
  constructor(
    @inject("UserAddressRepository")
    private userAddressRepository: IUserAddressRepository
  ) {}

  async Create({
    UserId,
    Description,
    PostalCode,
    Number,
    Complement,
    Neighborhood,
    City,
    State,
  }: ICreateUserAddressDTO): Promise<UserAddress> {
    const userAddress = await this.userAddressRepository.Create({
      UserId,
      Description,
      PostalCode,
      Number,
      Complement,
      Neighborhood,
      City,
      State,
    });

    return userAddress;
  }

  async FindAllByUserId(userId: string): Promise<UserAddress[]> {
    const userAddress = await this.userAddressRepository.FindAllByUserId(
      userId
    );

    return userAddress;
  }

  async Delete(Id: string): Promise<void> {
    await this.userAddressRepository.Delete(Id);
  }

  async FindById(Id: string): Promise<UserAddress> {
    const userAddress = await this.userAddressRepository.FindById(Id);

    return userAddress;
  }
}

export { UserAddressService };
