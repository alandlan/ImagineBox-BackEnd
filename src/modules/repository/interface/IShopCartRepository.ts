import { ICreateShopCartDTO } from "../../dtos/ICreateShopCartDto";
import { ShopCart } from "../../models/ShopCart";

interface IShopCartRepository {
  Create(data: ICreateShopCartDTO): Promise<void>;
  FindByUserId(UserId: string): Promise<ShopCart>;
}

export { IShopCartRepository };
