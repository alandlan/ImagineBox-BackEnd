import { inject, injectable } from "tsyringe";

import { AppError } from "../../errors/AppError";
import { ShopCart } from "../models/ShopCart";
import { IShopCartRepository } from "../repository/interface/IShopCartRepository";
import { IShopItemCartRepository } from "../repository/interface/IShopItemCartRepository";

interface IRequestItem {
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

  async AddItem({ UserId, Quantity, ProductId }: IRequestItem): Promise<void> {
    const shopCart = await this.shopCartRepository.FindByUserId(UserId);

    const shopItemCart = shopCart.ItensCart.filter((item) => {
      if (item.ProductId === ProductId) return item;

      return undefined;
    });

    if (
      shopItemCart !== undefined &&
      shopItemCart[0]?.ProductId === ProductId
    ) {
      const product = shopItemCart[0];

      product.Quantity += Quantity;

      await this.shopItemCartRepository.UpdateItem(product);
    } else {
      await this.shopItemCartRepository.AddItem({
        ShopCartId: shopCart.Id,
        ProductId,
        Quantity,
      });
    }
  }

  async RemoveItem({
    UserId,
    Quantity,
    ProductId,
  }: IRequestItem): Promise<void> {
    const shopCart = await this.shopCartRepository.FindByUserId(UserId);

    if (shopCart.ItensCart.length > 0) {
      const shopItemCart = shopCart.ItensCart.filter((item) => {
        if (item.ProductId === ProductId) return item;

        return undefined;
      });

      // produto existe no carrinho
      if (shopItemCart !== undefined) {
        if (Quantity > 0) {
          if (Quantity > Number(shopItemCart[0]?.Quantity)) {
            throw new AppError(
              `Quantidade superior a ${String(shopItemCart[0]?.Quantity)}`,
              400
            );
          } else if (Quantity === Number(shopItemCart[0]?.Quantity)) {
            await this.shopItemCartRepository.RemoveItem(
              shopCart.Id,
              shopItemCart[0].ProductId
            );
          } else {
            const itemCart = shopItemCart[0];
            itemCart!.Quantity -= Quantity;

            await this.shopItemCartRepository.UpdateItem(itemCart!);
          }
        } else {
          await this.shopItemCartRepository.RemoveItem(
            shopCart.Id,
            shopItemCart[0].ProductId
          );
        }
      }
    }
  }

  async FindByUserId(UserId: string): Promise<ShopCart> {
    const shopCart = await this.shopCartRepository.FindByUserId(UserId);

    let total = 0.0;

    shopCart.ItensCart.forEach((item) => {
      total += item.Quantity * item.Product.Price;
    });
    shopCart.Total = total;

    console.log(shopCart);

    return shopCart;
  }

  async Reset(UserId: string): Promise<void> {
    const shopCart = await this.shopCartRepository.FindByUserId(UserId);

    if (shopCart.ItensCart.length > 0)
      await this.shopItemCartRepository.Reset(shopCart.Id);
  }
}

export { ShopCartService };
