import { ICreateShopItemCart } from "../../dtos/ICreateShopItemCart";
import { ShopItemCart } from "../../models/ShopItemCart";

interface IShopItemCartRepository {
  AddItem(data: ICreateShopItemCart): Promise<void>;
  RemoveItem(ShopCartId: string, ProductId: string): Promise<void>;
  UpdateItem(ShopItemCart: ShopItemCart): Promise<void>;
  Reset(ShopCartId: string): Promise<void>;
}

export { IShopItemCartRepository };
