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

  async FindByUserId(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const userAddressService = container.resolve(UserAddressService);

    const userAddress = await userAddressService.FindByUserId(id);

    return response.status(200).json(userAddress);
  }
}

export { UserAddressController };
