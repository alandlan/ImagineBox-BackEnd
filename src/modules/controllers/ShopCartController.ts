import { Request, Response } from "express";
import { container } from "tsyringe";

import { ShopCartService } from "../services/ShopCartService";

class ShopCartController {
  async AddItem(request: Request, response: Response): Promise<Response> {
    const { id: UserId } = request.user;
    const { ProductId, Quantity } = request.body;

    const shopCartService = container.resolve(ShopCartService);

    await shopCartService.AddItem({ UserId, ProductId, Quantity });

    return response
      .status(202)
      .json({ message: "Produto adicionado ao Carrinho!" });
  }

  async FindByUserId(request: Request, response: Response): Promise<Response> {
    const { id: UserId } = request.user;

    const shopCartService = container.resolve(ShopCartService);

    const shopCart = await shopCartService.FindByUserId(UserId);

    console.log(shopCart);

    return response.status(200).json(shopCart);
  }
}

export { ShopCartController };
