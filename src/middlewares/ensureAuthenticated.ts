import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import auth from "../config/auth";
import { AppError } from "../errors/AppError";
import { UserRepository } from "../modules/repository/UserRepository";
import { UserTokenRepository } from "../modules/repository/UserTokenRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;
  const userTokenRepository = new UserTokenRepository();

  if (!authHeader) {
    throw new AppError("Faltou informar o Token!", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, auth.SecretRefreshToken) as IPayload;

    const user = await userTokenRepository.FindByUserAndToken(user_id, token);

    if (!user) {
      throw new AppError("Usuário não localizado!", 401);
    }

    request.user = {
      id: user_id,
    };

    next();
  } catch (error) {
    throw new AppError("Invalid token!", 401);
  }
}
