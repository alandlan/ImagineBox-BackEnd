import { getRepository, Repository } from "typeorm";

import { OrderItem } from "../models/OrderItem";
import { IOrderItemRepository } from "./interface/IOrderItemRepository";

class OrderItemRepository implements IOrderItemRepository {
  private repository: Repository<OrderItem>;
  constructor() {
    this.repository = getRepository(OrderItem);
  }

  async AddItem(orderItens: OrderItem[]): Promise<void> {
    await this.repository.save(orderItens);
  }
}

export { OrderItemRepository };
