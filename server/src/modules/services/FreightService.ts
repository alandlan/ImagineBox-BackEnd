import {
  calcularPrecoPrazo,
  CepResponse,
  consultarCep,
  PrecoPrazoResponse,
} from "correios-brasil";

import { Product } from "../models/Product";

class FreightService {
  async FindCep(cep: string): Promise<CepResponse> {
    const retorno: any = consultarCep(cep).then((response) => {
      return response;
    });

    const response: CepResponse = retorno;

    return response;
  }

  async GetPriceAndDeadLineByProduct(
    product: Product,
    cep: string
  ): Promise<PrecoPrazoResponse> {
    const args = {
      sCepOrigem: "04814390",
      sCepDestino: cep,
      nVlPeso: product.Weight,
      nCdFormato: product.Format,
      nVlComprimento: product.Length,
      nVlAltura: product.Height,
      nVlLargura: product.Width,
      nCdServico: ["04014", "04510"],
      nVlDiametro: product.Diameter,
    };

    const search: any = await calcularPrecoPrazo(args).then((response) => {
      return response;
    });

    const response: PrecoPrazoResponse = search;

    return response;
  }
}

export { FreightService };
