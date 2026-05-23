import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuilderModule } from './builder/builder.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [BuilderModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
