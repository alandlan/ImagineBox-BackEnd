import { NextFunction, Request, Response } from "express";

import { AppError } from "../errors/AppError";
import { UserRepository } from "../modules/repository/UserRepository";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id } = request.user;

  const userRepository = new UserRepository();
  const user = await userRepository.FindById(id);

  if (!user || !user.IsAdmin) {
    throw new AppError("Não autorizado!", 300);
  }

  return next();
}
