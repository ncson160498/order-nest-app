import { CreateOrderBodyDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { OrderService } from "./order.service";
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";

@Controller("order")
export class OrderController {
  constructor(private orderService: OrderService) {}
  @Get()
  getOrders() {
    return this.orderService.get();
  }
  @Post()
  store(@Body() createOrderDto: CreateOrderBodyDto) {
    return this.orderService.create(createOrderDto);
  }
  @Patch("/:id")
  update(@Param() id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(id, updateOrderDto);
  }
  @Get("/:id")
  getOrder(@Param() id: string) {
    // console.log(orderID);
    return this.orderService.getOne(id);
  }
  @Delete("/:id")
  deleteOrder(@Param() id: string) {
    return this.orderService.delete(id);
  }
}
