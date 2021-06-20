import { Request, Response } from "express";
import { container } from "tsyringe";

import { CatalogueService } from "../services/CatalogueService";

class CatalogueController {
  async Create(request: Request, response: Response): Promise<Response> {
    const { Name, Description } = request.body;

    const catalogueService = container.resolve(CatalogueService);

    const catalogue = await catalogueService.create({ Name, Description });

    return response.status(201).json(catalogue);
  }

  async FindByName(request: Request, response: Response): Promise<Response> {
    const { Name } = request.query;

    const catalogueService = container.resolve(CatalogueService);

    const catalogue = await catalogueService.findByName(Name as string);

    if (!catalogue)
      return response.status(404).json({ message: "Catalogo não encontrado!" });

    return response.status(200).json(catalogue);
  }
}

export { CatalogueController };
