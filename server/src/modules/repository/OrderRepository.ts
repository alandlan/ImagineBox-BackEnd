import { ICreateOrderDTO } from "../dtos/ICreateOrderDto";
import { Order } from "../models/Order";
import { IOrderRepository } from "./interface/IOrderRepository";

class OrderRepository implements IOrderRepository {
  Create(data: ICreateOrderDTO): Promise<Order> {
    throw new Error("Method not implemented.");
  }
}

export { OrderRepository };
