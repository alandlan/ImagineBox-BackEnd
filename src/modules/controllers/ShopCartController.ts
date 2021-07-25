import { Request, Response } from "express";
import { container } from "tsyringe";

import { ShopCartService } from "../services/ShopCartService";

class ShopCartController {
  async AddItem(request: Request, response: Response): Promise<Response> {
    const { id: UserId } = request.user;
    const { Id } = request.params;
    const { Quantity } = request.body;

    const ProductId = String(Id);

    const shopCartService = container.resolve(ShopCartService);

    await shopCartService.AddItem({ UserId, ProductId, Quantity });

    const shopCart = await shopCartService.FindByUserId(UserId);

    return response
      .status(202)
      .json({ message: "Produto adicionado ao Carrinho!", shopCart });
  }

  async RemoveItem(request: Request, response: Response): Promise<Response> {
    const { id: UserId } = request.user;
    const { Id } = request.params;
    const { Quantity } = request.body;

    const ProductId = String(Id);

    const shopCartService = container.resolve(ShopCartService);

    await shopCartService.RemoveItem({ UserId, Quantity, ProductId });

    const shopCart = await shopCartService.FindByUserId(UserId);

    return response
      .status(202)
      .json({ message: "Produto removido do Carrinho!", shopCart });
  }

  async FindByUserId(request: Request, response: Response): Promise<Response> {
    const { id: UserId } = request.user;

    const shopCartService = container.resolve(ShopCartService);

    const shopCart = await shopCartService.FindByUserId(UserId);

    return response.status(200).json(shopCart);
  }

  async Reset(request: Request, response: Response): Promise<Response> {
    const { id: UserId } = request.user;

    const shopCartService = container.resolve(ShopCartService);

    await shopCartService.Reset(UserId);

    const shopCart = await shopCartService.FindByUserId(UserId);

    return response.status(200).json({ message: "Carrinho limpo!", shopCart });
  }
}

export { ShopCartController };
