import { Request, Response } from "express";
import { container } from "tsyringe";

import { UserAddressService } from "../services/UserAddressService";

class UserAddressController {
  async Create(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const {
      Description,
      PostalCode,
      Number,
      Complement,
      Neighborhood,
      City,
      State,
    } = request.body;

    const userAddressService = container.resolve(UserAddressService);

    const userAddress = await userAddressService.Create({
      UserId: id,
      Description,
      PostalCode,
      Number,
      Complement,
      Neighborhood,
      City,
      State,
    });

    return response.status(201).json(userAddress);
  }

  async FindAllByUserId(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.user;

    const userAddressService = container.resolve(UserAddressService);

    const userAddress = await userAddressService.FindAllByUserId(id);

    return response.status(200).json(userAddress);
  }

  async Delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const userAddressService = container.resolve(UserAddressService);

    await userAddressService.Delete(id);

    return response.status(200).json({ message: "Endereço removido!" });
  }

  async FindById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const userAddressService = container.resolve(UserAddressService);

    const userAddress = await userAddressService.FindById(id);

    return response.status(200).json(userAddress);
  }
}

export { UserAddressController };
