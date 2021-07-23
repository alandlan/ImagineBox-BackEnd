import { inject, injectable } from "tsyringe";

import { IShopCartRepository } from "../repository/interface/IShopCartRepository";

@injectable()
class ShopCartService {
  constructor(
    @inject("ShopCartRepository")
    private shopCartRepository: IShopCartRepository
  ) {}

  async Create(UserId: string): Promise<void> {
    await this.shopCartRepository.Create({ UserId });
  }
}

export { ShopCartService };
