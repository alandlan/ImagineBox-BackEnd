import { Request, Response } from "express";
import { container } from "tsyringe";

import { CatalogueService } from "../services/CatalogueService";

class CatalogueController {
  async Create(request: Request, response: Response): Promise<Response> {
    const { Name, Description } = request.body;

    const catalogueService = container.resolve(CatalogueService);

    const catalogue = await catalogueService.Create({ Name, Description });

    return response.status(201).json(catalogue);
  }

  async FindByName(request: Request, response: Response): Promise<Response> {
    const { Name } = request.query;

    const catalogueService = container.resolve(CatalogueService);

    const catalogue = await catalogueService.FindByName(Name as string);

    if (!catalogue)
      return response.status(404).json({ message: "Catalogo não encontrado!" });

    return response.status(200).json(catalogue);
  }

  async UpdateCatalogues(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { Id } = request.params;
    const { ProductIds } = request.body;

    const catalogueService = container.resolve(CatalogueService);

    const catalogues = await catalogueService.UpdateCatalogues({
      CatalogueId: Id,
      ProductIds,
    });

    return response.status(201).json(catalogues);
  }
}

export { CatalogueController };
