import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "../../errors/AppError";
import { UserService } from "../services/UserService";

class UserController {
  async FindByEmail(request: Request, response: Response): Promise<Response> {
    const { Email } = request.query;

    if (!Email) {
      throw new AppError("Email não foi enviado!", 404);
    }

    const userService = container.resolve(UserService);

    const user = await userService.FindByEmail(Email as string);

    return response.status(200).json(user);
  }

  async FindById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    if (!id) {
      throw new AppError("Id não foi enviado!", 404);
    }

    const userService = container.resolve(UserService);

    const user = await userService.FindById(id as string);

    return response.status(200).json(user);
  }

  async FindAll(request: Request, response: Response): Promise<Response> {
    const userService = container.resolve(UserService);

    const users = await userService.FindAll();

    return response.status(200).json(users);
  }

  async Create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, documentType, document, phone, mobile } =
      request.body;

    const userService = container.resolve(UserService);

    await userService.Create({
      name,
      email,
      password,
      documentType,
      document,
      phone,
      mobile,
    });

    return response.status(201).send();
  }

  async Update(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { phone, mobile } = request.body;

    const userService = container.resolve(UserService);

    const user = userService.Update({ id, phone, mobile });

    return response.status(200).json(user);
  }
}

export { UserController };
