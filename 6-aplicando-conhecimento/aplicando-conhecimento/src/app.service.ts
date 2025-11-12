import { Injectable } from '@nestjs/common';

export type unidadeOrigem = 'metro(s)' | 'quilometro(s)' | 'milha(s)';
export type unidadeDestino = 'metro(s)' | 'quilometro(s)' | 'milha(s)';

@Injectable()
export class AppService {
  convertDistance(valor: number, unidadeOrigem: unidadeOrigem, unidadeDestino: unidadeDestino): string {
    if (unidadeOrigem === unidadeDestino) {
      return valor + ' ' + unidadeOrigem + ' equivale(m) a ' + valor + ' ' + unidadeDestino + '.';
    } else if (unidadeOrigem === 'metro(s)' && unidadeDestino === 'quilometro(s)') {
      return valor + ' ' + unidadeOrigem + ' equivale(m) a ' + (valor / 1000) + ' ' + unidadeDestino + '.';
    } else if (unidadeOrigem === 'metro(s)' && unidadeDestino === 'milha(s)') {
      return valor + ' ' + unidadeOrigem + ' equivale(m) a ' + (valor * 0.000621) + ' ' + unidadeDestino + '.';
    } else if (unidadeOrigem === 'quilometro(s)' && unidadeDestino === 'metro(s)') {
      return valor + ' ' + unidadeOrigem + ' equivale(m) a ' + (valor * 1000) + ' ' + unidadeDestino + '.';
    } else if (unidadeOrigem === 'quilometro(s)' && unidadeDestino === 'milha(s)') {
      return valor + ' ' + unidadeOrigem + ' equivale(m) a ' + (valor * 0.621) + ' ' + unidadeDestino + '.';
    } else if (unidadeOrigem === 'milha(s)' && unidadeDestino === 'metro(s)') {
      return valor + ' ' + unidadeOrigem + ' equivale(m) a ' + (valor * 1609.34) + ' ' + unidadeDestino + '.';
    } else if (unidadeOrigem === 'milha(s)' && unidadeDestino === 'quilometro(s)') {
      return valor + ' ' + unidadeOrigem + ' equivale(m) a ' + (valor * 1.609) + ' ' + unidadeDestino + '.';
    } else {
      return 'Unidade de origem ou destino inválida.';
    }
  }

  abreviarMedida(abreviacao: string): (unidadeOrigem | unidadeDestino) {
    const abreviar: Record<string, unidadeOrigem | unidadeDestino> = {
      'm': 'metro(s)',
      'km': 'quilometro(s)',
      'mi': 'milha(s)'
    };
    return abreviar[abreviacao];
  }
}
