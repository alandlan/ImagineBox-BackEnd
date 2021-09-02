import { Request, Response } from "express";
import { container } from "tsyringe";

import { OrderService } from "../services/OrderService";

class OrderController {
  async CloseOrder(request: Request, response: Response): Promise<Response> {
    const { id: UserId } = request.user;

    const orderService = container.resolve(OrderService);

    const shopcart = await orderService.CloseOrder(UserId);

    return response.status(200).json(shopcart);
  }
}

export { OrderController };
