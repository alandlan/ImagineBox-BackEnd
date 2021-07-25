import { getRepository, Repository } from "typeorm";

import { ICreateShopCartDTO } from "../dtos/ICreateShopCartDto";
import { ShopCart } from "../models/ShopCart";
import { IShopCartRepository } from "./interface/IShopCartRepository";

class ShopCartRepository implements IShopCartRepository {
  private repository: Repository<ShopCart>;

  constructor() {
    this.repository = getRepository(ShopCart);
  }
  async FindByUserId(UserId: string): Promise<ShopCart> {
    const shopCart = await this.repository
      .createQueryBuilder("ShopCart")
      .innerJoinAndSelect(
        "ShopCart.ItensCart",
        "ItemCart"
        // "ItemCart.ShopCartId = ShopCart.Id"
      )
      .innerJoinAndSelect(
        "ItemCart.Product",
        "Product"
        // "Product.Id = ItemCart.ProductId"
      )
      .where("ShopCart.UserId = :UserId", { UserId })
      .getOne();

    return shopCart!;
  }

  async Create({ Id, UserId }: ICreateShopCartDTO): Promise<void> {
    const shopCart = this.repository.create({ Id, UserId });
    await this.repository.save(shopCart);
  }
}

export { ShopCartRepository };
