import { inject, injectable } from "tsyringe";

import { ShopCart } from "../models/ShopCart";
import { IShopCartRepository } from "../repository/interface/IShopCartRepository";
import { IShopItemCartRepository } from "../repository/interface/IShopItemCartRepository";

@injectable()
class OrderService {
  constructor(
    @inject("ShopCartRepository")
    private shopCartRepository: IShopCartRepository,
    @inject("ShopItemCartRepository")
    private shopItemCartRepository: IShopItemCartRepository
  ) {}

  async CloseOrder(UserId: string): Promise<ShopCart> {
    const shopCart = await this.shopCartRepository.FindByUserId(UserId);

    return shopCart;
  }
}

export { OrderService };
