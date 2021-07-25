import { ICreateShopItemCart } from "../../dtos/ICreateShopItemCart";

interface IShopItemCartRepository {
  AddItem(data: ICreateShopItemCart): Promise<void>;
  RemoveItem(ShopCartId: string, ProductId: string): Promise<void>;
  Reset(ShopCartId: string): Promise<void>;
}

export { IShopItemCartRepository };
