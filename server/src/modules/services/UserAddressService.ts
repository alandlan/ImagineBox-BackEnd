import { inject, injectable } from "tsyringe";

import { AppError } from "../../errors/AppError";
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
    StreetName,
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
      StreetName,
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

  async Delete(Id: string, UserId: string): Promise<void> {
    const userAddress = await this.userAddressRepository.FindById(Id);

    if (!userAddress || userAddress.UserId !== UserId) {
      throw new AppError("Endereço não localizado", 404);
    }

    await this.userAddressRepository.Delete(Id);
  }

  async FindById(Id: string, UserId: string): Promise<UserAddress> {
    const userAddress = await this.userAddressRepository.FindById(Id);

    if (!userAddress || userAddress.UserId !== UserId) {
      throw new AppError("Endereço não localizado", 404);
    }

    return userAddress;
  }
}

export { UserAddressService };
