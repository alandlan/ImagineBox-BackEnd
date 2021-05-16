import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateService } from "../services/AuthenticateService";

class AuthenticateController {
  async Authenticate(request: Request, response: Response): Promise<Response> {
    const { password, email } = request.body;

    const authenticateService = container.resolve(AuthenticateService);

    const info = await authenticateService.Authenticate({ password, email });

    return response.json(info);
  }
}

export { AuthenticateController };
