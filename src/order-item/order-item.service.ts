import { OrderItem } from "src/order-item/entities/order-item.entity";
import { Injectable, Controller } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { CreateOrderItemDto, UpdateOrderItemDto } from "./dto/order-item.dto";
import * as _ from "lodash";
import { v4 as uuid } from "uuid";
import { Product } from "src/product/entities/product.entity";
import { Order } from "src/order/entities/order.entity";

@Injectable()
export class OrderItemService {
  constructor(
    @InjectRepository(OrderItem)
    private orderItemRepo: Repository<OrderItem>,
    @InjectRepository(Product)
    private productRepo: Repository<Product>,
    private dataSource: DataSource
  ) {}

  async get() {
    return await this.orderItemRepo.find();
  }

  // async create(body: CreateOrderItemDto) {
  //   try {
  //     const newOrderItem = new OrderItem();
  //     _.assign(newOrderItem, body);
  //     newOrderItem.id = uuid();
  //     // const product = await this.productRepository.getOne(newOrderItem.order_id);
  //     // let price = parseFloat(product.price) * parseFloat(newOrderItem.quantity);
  //     // newOrderItem.price = price.toString();
  //     const result = await this.orderItemRepo.save(newOrderItem);
  //     return result;
  //   } catch (error) {
  //     throw error;
  //   }
  // }
  async update(id: any, body: UpdateOrderItemDto): Promise<any> {
    const queryRunner = this.dataSource.createQueryRunner();
    try {
      await queryRunner.connect();
      await queryRunner.startTransaction();
      const orderItem = await queryRunner.manager.findOne(OrderItem, {
        where: { id: id.id },
      });
      const product = await queryRunner.manager.findOne(Product, {
        where: { id: orderItem.productID },
      });
      const order = await queryRunner.manager.findOne(Order, {
        where: { id: orderItem.orderID },
      });
      product.quantity = (
        parseFloat(product.quantity) +
        parseFloat(orderItem.quantity) -
        parseFloat(body.quantity)
      ).toString();
      _.assign(orderItem, body);
      const olderPrice = orderItem.price;

      orderItem.price = (
        parseFloat(body.quantity) * parseFloat(product.price)
      ).toString();
      order.totalPrice = (
        parseFloat(order.totalPrice) +
        parseFloat(orderItem.price) -
        parseFloat(olderPrice)
      ).toString();
      await queryRunner.manager.update(Order, order.id, order);
      await queryRunner.manager.update(Product, product.id, product);
      const updateOrderItem = await queryRunner.manager.update(
        OrderItem,
        id,
        orderItem
      );

      await queryRunner.commitTransaction();
      return updateOrderItem;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  async getOne(id: any) {
    return await this.orderItemRepo.findOne({ where: { id: id.id } });
  }

  async deleteOrderItem(id: any) {
    const queryRunner = await this.dataSource.createQueryRunner();
    try {
      await queryRunner.connect();
      await queryRunner.startTransaction();
      const orderItem = await queryRunner.manager.findOne(OrderItem, {
        where: { id: id.id },
      });
      const order = await queryRunner.manager.findOne(Order, {
        where: { id: orderItem.orderID },
      });

      order.totalPrice = (
        parseFloat(order.totalPrice) - parseFloat(orderItem.price)
      ).toString();
      console.log(order.totalPrice);
      const product = await queryRunner.manager.findOne(Product, {
        where: { id: orderItem.productID },
      });
      product.quantity = (
        parseFloat(product.quantity) + parseFloat(orderItem.quantity)
      ).toString();
      await queryRunner.manager.delete(OrderItem, id.id);
      await queryRunner.manager.update(Order, order.id, order);
      await queryRunner.manager.update(Product, product.id, product);
      await queryRunner.commitTransaction();
      // return result;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
