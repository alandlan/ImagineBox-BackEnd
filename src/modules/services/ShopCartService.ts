import { inject, injectable } from "tsyringe";

import { IShopCartRepository } from "../repository/interface/IShopCartRepository";
import { IShopItemCartRepository } from "../repository/interface/IShopItemCartRepository";

interface IRequestAddItem {
  UserId: string;
  ProductId: string;
  Quantity: number;
}

@injectable()
class ShopCartService {
  constructor(
    @inject("ShopCartRepository")
    private shopCartRepository: IShopCartRepository,
    @inject("ShopItemCartRepository")
    private shopItemCartRepository: IShopItemCartRepository
  ) {}

  async Create(UserId: string): Promise<void> {
    await this.shopCartRepository.Create({ UserId });
  }

  async AddItem({
    UserId,
    Quantity,
    ProductId,
  }: IRequestAddItem): Promise<void> {
    const shopCart = await this.shopCartRepository.FindByUserId(UserId);

    await this.shopItemCartRepository.AddItem({
      ShopCartId: shopCart.Id,
      ProductId,
      Quantity,
    });
  }
}

export { ShopCartService };
