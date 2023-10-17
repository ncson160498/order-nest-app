import { CreateOrderBodyDto } from "./dto/create-order.dto";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Order } from "./entities/order.entity";
import { Repository, getConnection } from "typeorm";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { v4 as uuid } from "uuid";
import * as _ from "lodash";
import { OrderItem } from "src/order-item/entities/order-item.entity";
import dataSource from "db/data-source";
@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>
  ) {}
  async get() {
    const result = await this.orderRepository.find({});
    return result;
  }

  async create(body: CreateOrderBodyDto) {
    // // return this.orderRepository.save(createOrderDto);
    // // console.log(createOrderDto);
    // const { orderItems } = body;

    // try {
    //   const newOrder = new Order();
    //   _.assign(newOrder, body);
    //   newOrder.id = uuid();
    //   for(const item of orderItems){
    //     const newOrderItem = new OrderItem()

    //     newOrderItem.id=newOrder.id
    //   }
    //   const result = await this.orderRepository.save(newOrder);
    //   return result;
    // } catch (error) {
    //   throw error;
    // }
    // return this.orderRepository.save(createOrderDto);
    // console.log(createOrderDto);
    const { orderItems } = body;

    // Su dung query runner
    const queryRunner = dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction("SERIALIZABLE");

    try {
      //  Doi  const result = await this.orderRepository.save(newOrder);
      // thanh await queryRunner.manager.save(Order, newOrder);
      // Them code tao order o dau
      let total = 0;
      const newOrderItems: OrderItem[] = [];
      const newOrder = new Order();
      _.assign(newOrder, body);
      newOrder.id = uuid();
      for (const item of orderItems) {
        // Khoi tao order item
        const newOrderItem = new OrderItem();
        newOrderItem.id = newOrder.id;
        // assign gia tri
        total =
          total +
          parseFloat(newOrderItem.price) * parseFloat(newOrderItem.quantity);
        //Tien tung mon hang
        newOrderItems.push(newOrderItem);
      }
      newOrder.total_price = total.toString();
      // const result = await this.orderRepository.save(newOrder);
      await queryRunner.manager.save(Order, newOrder);
      // insert order item bang query runner

      // return result;
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  update(id: string, body: UpdateOrderDto) {
    return this.orderRepository.update(id, body);
  }
  getOne(id: any) {
    return this.orderRepository.findOne({ where: { id: id.id } });
  }
  delete(id: string) {
    return this.orderRepository.delete(id);
  }
}
