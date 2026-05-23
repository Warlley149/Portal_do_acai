import { Body, Controller, Post } from '@nestjs/common';
import { PreviewOrderDto } from './dto/preview-order.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post('preview')
  previewOrder(@Body() dto: PreviewOrderDto) {
    return this.ordersService.previewOrder(dto);
  }
}
