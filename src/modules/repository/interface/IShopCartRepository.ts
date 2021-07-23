import { ICreateShopCartDTO } from "../../dtos/ICreateShopCartDto";

interface IShopCartRepository {
  Create(data: ICreateShopCartDTO): Promise<void>;
}

export { IShopCartRepository };
