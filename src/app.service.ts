import { Injectable } from '@nestjs/common';

// Responsável pela funcionalidade, ação
@Injectable()
export class AppService {
  getHello(nome: string): string {
    return 'Hello ' + nome + "!";
  }
}
