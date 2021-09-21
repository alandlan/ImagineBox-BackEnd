import { consultarCep } from "correios-brasil";

import { CepDto } from "../dtos/CepDto";

class FreightService {
  async FindCep(cep: string): Promise<CepDto> {
    const endereco = new CepDto();

    await consultarCep(cep).then((response) => {
      if (response !== undefined) {
        endereco.cep = response.cep;
        endereco.logradouro = response.logradouro;
        endereco.complemento = response.complemento;
        endereco.bairro = response.bairro;
        endereco.localidade = response.localidade;
        endereco.uf = response.uf;
        endereco.ibge = response.ibge;
      }
    });

    return endereco;
  }
}

export { FreightService };
