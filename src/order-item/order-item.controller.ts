import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { OrderItemService } from "./order-item.service";
import { CreateOrderItemDto, UpdateOrderItemDto } from "./dto/order-item.dto";

@Controller("order-item")
export class OrderItemController {
  constructor(private oderItemService: OrderItemService) {}

  @Get()
  getAllOrderItems() {
    return this.oderItemService.get();
  }

  // @Post()
  // createOrderItem(@Body() body:CreateOrderItemDto){
  //     return this.oderItemService.create(body);
  // }

  @Patch(":id")
  update(@Param() id: string, @Body() body: UpdateOrderItemDto) {
    return this.oderItemService.update(id, body);
  }

  @Get(":id")
  getOrderItem(@Param() id: string) {
    return this.oderItemService.getOne(id);
  }

  @Delete(":id")
  delete(@Param() id: string) {
    return this.oderItemService.deleteOrderItem(id);
  }
}
