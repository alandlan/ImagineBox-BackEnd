import { getRepository, Repository } from "typeorm";

import { ICreateShopItemCart } from "../dtos/ICreateShopItemCart";
import { ShopItemCart } from "../models/ShopItemCart";
import { IShopItemCartRepository } from "./interface/IShopItemCartRepository";

class ShopItemCartRepository implements IShopItemCartRepository {
  private repository: Repository<ShopItemCart>;

  constructor() {
    this.repository = getRepository(ShopItemCart);
  }
  async RemoveItem(ShopCartId: string, ProductId: string): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .delete()
      .where("ShopCartId = :ShopCartId and ProductId = :ProductId", {
        ShopCartId,
        ProductId,
      })
      .execute();
  }

  async Reset(ShopCartId: string): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .delete()
      .where("ShopCartId = :ShopCartId", { ShopCartId })
      .execute();
  }

  async AddItem({
    Id,
    ProductId,
    Quantity,
    ShopCartId,
  }: ICreateShopItemCart): Promise<void> {
    const itemCart = this.repository.create({
      Id,
      ProductId,
      ShopCartId,
      Quantity,
    });

    await this.repository.save(itemCart);
  }
}

export { ShopItemCartRepository };
