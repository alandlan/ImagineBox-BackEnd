import { ICreateShopItemCart } from "../../dtos/ICreateShopItemCart";

interface IShopItemCartRepository {
  AddItem(data: ICreateShopItemCart): Promise<void>;
  Reset(ShopCartId: string): Promise<void>;
}

export { IShopItemCartRepository };
