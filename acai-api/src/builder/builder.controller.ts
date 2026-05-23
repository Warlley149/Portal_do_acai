import { Controller, Get } from '@nestjs/common';
import { BuilderService } from './builder.service';

@Controller()
export class BuilderController {
  constructor(private readonly builderService: BuilderService) {}

  @Get('builder-options')
  getBuilderOptions() {
    return this.builderService.getBuilderOptions();
  }
}
