import { getRepository, Repository } from "typeorm";

import { ICreateShopCartDTO } from "../dtos/ICreateShopCartDto";
import { ShopCart } from "../models/ShopCart";
import { IShopCartRepository } from "./interface/IShopCartRepository";

class ShopCartRepository implements IShopCartRepository {
  private repository: Repository<ShopCart>;

  constructor() {
    this.repository = getRepository(ShopCart);
  }

  async Create({ Id, UserId }: ICreateShopCartDTO): Promise<void> {
    const shopCart = this.repository.create({ Id, UserId });
    await this.repository.save(shopCart);
  }
}

export { ShopCartRepository };
