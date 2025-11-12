import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

// Responsável por fazer as rotas
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Anotação do verbo get
  // Colocar parâmetros dentro da rota do serviço = BASE!
  // @Get(':nome')
  // getHello(@Param('nome') nome): string {
  //   return this.appService.getHello(nome);
  // }
}
