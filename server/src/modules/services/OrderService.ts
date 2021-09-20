import { container, inject, injectable } from "tsyringe";

import { AppError } from "../../errors/AppError";
import { IDateProvider } from "../../shared/provider/DateProvider/IDateProvider/IDateProvider";
import { Order } from "../models/Order";
import { OrderItem } from "../models/OrderItem";
import { IOrderItemRepository } from "../repository/interface/IOrderItemRepository";
import { IOrderRepository } from "../repository/interface/IOrderRepository";
import { IShopCartRepository } from "../repository/interface/IShopCartRepository";
import { IUserAddressRepository } from "../repository/interface/IUserAddressRepository";
import { ShopCartService } from "./ShopCartService";

@injectable()
class OrderService {
  constructor(
    @inject("ShopCartRepository")
    private shopCartRepository: IShopCartRepository,
    @inject("UserAddressRepository")
    private userAddressRepository: IUserAddressRepository,
    @inject("OrderRepository")
    private orderRepository: IOrderRepository,
    @inject("OrderItemRepository")
    private orderItemRepository: IOrderItemRepository,
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider
  ) {}

  async CloseOrder(UserId: string, AddressId: string): Promise<Order> {
    const OrderStatusId = 1;
    const ExpectedDate = this.dateProvider.AddDays(30);
    const shopCartService = container.resolve(ShopCartService);

    const address = await this.userAddressRepository.FindById(AddressId);

    if (!address) throw new AppError("Endereço não localizado!", 404);

    if (address.UserId !== UserId)
      throw new AppError("Endereço não pertence ao Usuário!", 400);

    const shopCart = await shopCartService.FindByUserId(UserId);

    if (shopCart.ItensCart.length === 0)
      throw new AppError("Carrinho vazio!", 400);

    const order = await this.orderRepository.Create({
      UserId,
      OrderStatusId,
      ExpectedDate,
      PriceProducts: shopCart.Total,
      PriceFreight: 1,
      PriceTotal: shopCart.Total + 1,
      PostalCode: address.PostalCode,
      StreetName: address.StreetName,
      Number: address.Number,
      Complement: address.Complement,
      Neighborhood: address.Neighborhood,
      City: address.City,
      State: address.State,
    });

    const orderItens: OrderItem[] = [];

    shopCart.ItensCart.forEach((item) => {
      const orderItem = new OrderItem();
      orderItem.OrderId = order.Id;
      orderItem.ProductId = item.ProductId;
      orderItem.Name = item.Product.Name;
      orderItem.Quantity = item.Quantity;
      orderItem.Price = item.Product.Price;
      orderItem.Total = item.Quantity * item.Product.Price;

      orderItens.push(orderItem);
    });

    await this.orderItemRepository.AddItem(orderItens);

    return order;
  }
}

export { OrderService };
