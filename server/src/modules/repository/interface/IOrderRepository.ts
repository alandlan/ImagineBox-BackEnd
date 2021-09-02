import { ICreateOrderDTO } from "../../dtos/ICreateOrderDto";
import { Order } from "../../models/Order";

interface IOrderRepository {
  Create(data: ICreateOrderDTO): Promise<Order>;
}

export { IOrderRepository };
