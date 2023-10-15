import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderService } from './order.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}
  @Get()
  getOrders() {
    return this.orderService.get();
  }
  @Post()
  store(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }
  @Patch('/:orderId')
  update(@Body() updateOrderDto: UpdateOrderDto, @Param() orderId: number) {
    return this.orderService.update(updateOrderDto, orderId);
  }
  @Get('/:orderID')
  getOrder(@Param() orderID: string) {
    console.log(orderID);
    return this.orderService.getOne(orderID);
  }
  @Delete('/:orderID')
  deleteOrder(@Param() orderID: string) {
    return this.orderService.delete(orderID);
  }
}
