import { Request, Response } from "express";
import { container } from "tsyringe";

import { FreightService } from "../services/FreightService";

class FreightController {
  async FindCep(request: Request, response: Response): Promise<Response> {
    const { Cep } = request.params;

    const freightService = container.resolve(FreightService);

    const endereco = await freightService.FindCep(Cep);

    return response.status(200).json(endereco);
  }
}

export { FreightController };
