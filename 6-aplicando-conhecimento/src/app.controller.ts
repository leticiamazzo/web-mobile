import { Controller, Get, Param } from '@nestjs/common';
import type { unidadeDestino, unidadeOrigem } from './app.service';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('converter/:valor/:unidadeOrigem/:unidadeDestino')
  convertDistance(
    @Param('valor') valor: string,
    @Param('unidadeOrigem') unidadeOrigem: string,
    @Param('unidadeDestino') unidadeDestino: string,
  ): string {
    const valorNumerico = parseFloat(valor);
    // Tratamento de erros
    if (Number.isNaN(valorNumerico)) return 'Valor inválido';

    // Abreviar medida na url
    const unidadeOrigemCompleta = this.appService.abreviarMedida(unidadeOrigem);
    const unidadeDestinoCompleta = this.appService.abreviarMedida(unidadeDestino);

    if (!unidadeOrigemCompleta || !unidadeDestinoCompleta) {
      return 'Unidade de origem ou destino inválida.';
    }

    return this.appService.convertDistance(valorNumerico, unidadeOrigemCompleta, unidadeDestinoCompleta);
  }
}
