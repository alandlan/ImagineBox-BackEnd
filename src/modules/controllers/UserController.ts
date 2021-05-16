import { Request, Response } from "express";
import { container } from "tsyringe";

import { UserService } from "../services/UserService";

class UserController {
  async FindByEmail(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    if (!email) {
      throw new Error("Email não foi enviado!");
    }

    const userService = container.resolve(UserService);

    const user = await userService.FindByEmail(email);

    return response.status(200).json(user);
  }

  async Create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const userService = container.resolve(UserService);

    await userService.Create({ name, email, password });

    return response.status(201).send();
  }
}

export { UserController };
