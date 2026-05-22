/*import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}*/

import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHome(): string {
    return 'API do Açaí funcionando!';
  }

  @Get('health')
  getHealth() {
    return {
      status: 'ok',
      api: 'acai-api',
      message: 'Servidor rodando com NestJS',
    };
  }
}