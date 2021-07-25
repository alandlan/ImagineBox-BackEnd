import { inject, injectable } from "tsyringe";

import { ShopCart } from "../models/ShopCart";
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

  async RemoveItem(UserId: string, ProductId: string): Promise<void> {
    const shopCart = await this.shopCartRepository.FindByUserId(UserId);

    if (shopCart.ItensCart.length > 0) {
      const product = shopCart.ItensCart.map((item) => {
        if (item.ProductId === ProductId) return item.Product;

        return undefined;
      });

      if (product !== undefined) {
        await this.shopItemCartRepository.RemoveItem(
          shopCart.Id,
          String(product[0]?.Id)
        );
      }
    }
  }

  async FindByUserId(UserId: string): Promise<ShopCart> {
    const shopCart = await this.shopCartRepository.FindByUserId(UserId);

    return shopCart;
  }

  async Reset(UserId: string): Promise<void> {
    const shopCart = await this.shopCartRepository.FindByUserId(UserId);

    if (shopCart.ItensCart.length > 0)
      await this.shopItemCartRepository.Reset(shopCart.Id);
  }
}

export { ShopCartService };
