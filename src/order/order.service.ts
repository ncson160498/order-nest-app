import { CreateOrderDto } from './dto/create-order.dto';
import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { UpdateOrderDto } from './dto/update-order.dto';
import { v4 as uuid } from 'uuid';
import * as _ from 'lodash';
@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>
  ) {}
  async get() {
    const result = await this.orderRepository.find({});
    console.log(result);
    return result;
  }
  async create(createOrderDto: CreateOrderDto) {
    // return this.orderRepository.save(createOrderDto);
    console.log(createOrderDto);
    try {
      const newOrder = new Order();
      _.assign(newOrder, createOrderDto);
      newOrder.id = uuid();
      const result = await this.orderRepository.save(newOrder);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

// update(updateOrderDto: UpdateOrderDto, data: any) {
//   return this.orderRepository.update({Order_Id: data.orderId}, updateOrderDto);
// }
// getOne(data: any) {
//   return this.orderRepository.findOne({ where: { Order_Id:data.orderID }});
// }
// delete(data: any) {
//   return this.orderRepository.delete({Order_Id:data.orderID});
// }
