import { ICreateShopItemCart } from "../../dtos/ICreateShopItemCart";

interface IShopItemCartRepository {
  AddItem(data: ICreateShopItemCart): Promise<void>;
}

export { IShopItemCartRepository };
