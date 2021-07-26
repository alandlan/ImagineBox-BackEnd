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

  async RefreshToken(request: Request, response: Response): Promise<Response> {
    const token =
      request.body.token ||
      request.headers["x-access-token"] ||
      request.query.token;

    const refreshTokenUseCase = container.resolve(AuthenticateService);

    const refresh_token = await refreshTokenUseCase.RefreshToken(token);

    return response.json(refresh_token);
  }
}

export { AuthenticateController };
