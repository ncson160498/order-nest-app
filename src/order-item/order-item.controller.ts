import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderItemService } from './order-item.service';
import { CreateOrderItemDto } from './dto/order-item.dto';

@Controller('order-item')
export class OrderItemController {
    constructor(private oderItemService: OrderItemService){}
    
    @Get()
    getAllOrderItems(){
        return this.oderItemService.get();
    }

    @Post()
    createOrderItem(@Body() body:CreateOrderItemDto){
        return this.oderItemService.create(body);
    }
}
