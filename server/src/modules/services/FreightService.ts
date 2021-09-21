import {
  calcularPrecoPrazo,
  CepResponse,
  consultarCep,
  PrecoPrazoResponse,
} from "correios-brasil";

import { Product } from "../models/Product";

class FreightService {
  async FindCep(cep: string): Promise<CepResponse | void> {
    return consultarCep(cep).then((response) => {
      return response;
    });
  }

  async GetPriceAndDeadLineByProduct(
    product: Product
  ): Promise<PrecoPrazoResponse | void> {
    const args = {
      sCepOrigem: "81200100",
      sCepDestino: "21770200",
      nVlPeso: "1",
      nCdFormato: "1",
      nVlComprimento: "20",
      nVlAltura: "20",
      nVlLargura: "20",
      nCdServico: ["04014", "04510"],
      nVlDiametro: "0",
    };

    return calcularPrecoPrazo(args).then((response) => {
      return response;
    });
  }
}

export { FreightService };
