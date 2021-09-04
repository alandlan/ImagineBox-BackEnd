import { OrderItem } from "../../models/OrderItem";

interface IOrderItemRepository {
  AddItem(orderItens: OrderItem[]): Promise<void>;
}

export { IOrderItemRepository };
