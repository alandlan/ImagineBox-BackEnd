import { getRepository, Repository } from "typeorm";

import { ICreateUserAddressDTO } from "../dtos/ICreateUserAddressDto";
import { UserAddress } from "../models/UserAddress";
import { IUserAddressRepository } from "./interface/IUserAddressRepository";

class UserAddressRepository implements IUserAddressRepository {
  private repository: Repository<UserAddress>;

  constructor() {
    this.repository = getRepository(UserAddress);
  }
  async FindById(Id: string): Promise<UserAddress> {
    const userAddress = await this.repository.findOne(Id);

    return userAddress!;
  }

  async Delete(Id: string): Promise<void> {
    await this.repository.delete({ Id });
  }

  async Create(Data: ICreateUserAddressDTO): Promise<UserAddress> {
    const userAddress = this.repository.create({
      UserId: Data.UserId,
      Description: Data.Description,
      PostalCode: Data.PostalCode,
      Number: Data.Number,
      Complement: Data.Complement,
      Neighborhood: Data.Neighborhood,
      City: Data.City,
      State: Data.State,
    });

    await this.repository.save(userAddress);

    return userAddress!;
  }

  async FindAllByUserId(userId: string): Promise<UserAddress[]> {
    const userAddress = await this.repository
      .createQueryBuilder("c")
      .where("c.UserId = :userId", { userId })
      .getMany();

    return userAddress;
  }
}

export { UserAddressRepository };
