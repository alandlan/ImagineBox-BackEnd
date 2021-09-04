import { getRepository, Repository } from "typeorm";

import { ICreateOrderDTO } from "../dtos/ICreateOrderDto";
import { Order } from "../models/Order";
import { IOrderRepository } from "./interface/IOrderRepository";

class OrderRepository implements IOrderRepository {
  private repository: Repository<Order>;

  constructor() {
    this.repository = getRepository(Order);
  }

  async Create({
    UserId,
    OrderStatusId,
    ExpectedDate,
    Price,
    PostalCode,
    StreetName,
    Number,
    Complement,
    Neighborhood,
    City,
    State,
  }: ICreateOrderDTO): Promise<Order> {
    const order = this.repository.create({
      UserId,
      OrderStatusId,
      ExpectedDate,
      Price,
      PostalCode,
      StreetName,
      Number,
      Complement,
      Neighborhood,
      City,
      State,
    });

    await this.repository.save(order);

    return order;
  }
}

export { OrderRepository };
