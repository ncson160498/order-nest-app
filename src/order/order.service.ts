import { CreateOrderDto } from './dto/create-order.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}
  get() {
    return this.orderRepository.find();
  }
  create(createOrderDto: CreateOrderDto) {
    return this.orderRepository.save(createOrderDto);
  }
  update(updateOrderDto: UpdateOrderDto, data: any) {
    return this.orderRepository.update({Order_Id: data.orderId}, updateOrderDto);
  }
  getOne(data: any) {
    return this.orderRepository.findOne({ where: { Order_Id:data.orderID }});
  }
  delete(data: any) {
    return this.orderRepository.delete({Order_Id:data.orderID});
  }
}
