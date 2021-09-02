import { inject, injectable } from "tsyringe";

import { AppError } from "../../errors/AppError";
import { Order } from "../models/Order";
import { ShopCart } from "../models/ShopCart";
import { IShopCartRepository } from "../repository/interface/IShopCartRepository";
import { IShopItemCartRepository } from "../repository/interface/IShopItemCartRepository";
import { IUserAddressRepository } from "../repository/interface/IUserAddressRepository";

@injectable()
class OrderService {
  constructor(
    @inject("ShopCartRepository")
    private shopCartRepository: IShopCartRepository,
    @inject("ShopItemCartRepository")
    private shopItemCartRepository: IShopItemCartRepository,
    @inject("UserAddressRepository")
    private userAddressRepository: IUserAddressRepository
  ) {}

  async CloseOrder(UserId: string, AddressId: string): Promise<Order> {
    const address = await this.userAddressRepository.FindById(AddressId);

    if (!address) throw new AppError("Endereço não localizado!", 404);

    if (address.UserId !== UserId)
      throw new AppError("Endereço não pertence ao Usuário!", 400);

    const shopCart = await this.shopCartRepository.FindByUserId(UserId);

    if (shopCart.ItensCart.length === 0)
      throw new AppError("Carrinho vazio!", 400);

    const order = new Order();

    return order;
  }
}

export { OrderService };
