import { Manage } from "./../manage/entities/manage.entity";
import { CreateOrderBodyDto } from "./dto/create-order.dto";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Order } from "./entities/order.entity";
import { ArrayOverlap, DataSource, Repository } from "typeorm";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { v4 as uuid } from "uuid";
import * as _ from "lodash";
import { OrderItem } from "src/order-item/entities/order-item.entity";
import { Product } from "src/product/entities/product.entity";
import { UpdateProductDto } from "src/product/dto/update-product.dto";
import { AdminAction } from "src/admin-action/entities/admin-action.entity";
import { combineLatest } from "rxjs";
@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    private readonly dataSource: DataSource // private productService: ProductService
  ) {}
  async get() {
    const result = await this.orderRepository.find({});
    return result;
  }
  async create(body: CreateOrderBodyDto) {
    // return this.orderRepository.save(createOrderDto);
    // console.log(createOrderDto);
    const orderItems = body.orderItems;
    const queryRunner = this.dataSource.createQueryRunner();
    try {
      await queryRunner.connect();
      await queryRunner.startTransaction();
      const newOrder = new Order();
      let total = 0;
      _.assign(newOrder, body);
      newOrder.id = uuid();
      const newOrderItems = [];
      for (const item of orderItems) {
        const newOrderItem = new OrderItem();
        newOrderItem.id = uuid();
        newOrderItem.orderID = newOrder.id;
        newOrderItem.productID = item.productID;
        newOrderItem.quantity = item.quantity;
        // console.log(newOrderItem, newOrderItem.orderID);
        // const product = await this.productRepository.findOne({
        //   where: { id: item.productID },
        // });
        const product = await queryRunner.manager.findOne(Product, {
          where: { id: item.productID },
        });
        // console.log(parseFloat(item.price) * parseFloat(product.quantity));
        newOrderItem.price = (
          parseFloat(product.price) * parseFloat(item.quantity)
        ).toString();
        // console.log("price:", price);
        total += parseFloat(newOrderItem.price);
        newOrderItems.push(newOrderItem);
        let updateQuantity: UpdateProductDto = new Product();
        updateQuantity.quantity = (
          parseFloat(product.quantity) - parseFloat(item.quantity)
        ).toString();
        if (parseInt(updateQuantity.quantity) < 0)
          return "the number is not enough";
        // await this.productRepository.update(product.id, updateQuantity);
        await queryRunner.manager.update(Product, product.id, updateQuantity);
        // const resultOrderItem=await this.orderItemRepo.save(new);
        // console.log(newOrder);
      }
      newOrder.totalPrice = total.toString();
      // const resultOrder = await this.orderRepository.save(newOrder);
      const resultOrder = await queryRunner.manager.save(Order, newOrder);
      // const resultOrderItem = await this.orderItemRepo.insert(newOrderItems);
      const resultOrderItem = await queryRunner.manager.insert(
        OrderItem,
        newOrderItems
      );
      await queryRunner.commitTransaction();
      return [resultOrder, resultOrderItem];
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  async update(id: any, body: UpdateOrderDto) {
    // return this.orderRepository.update(id, body);
    const queryRunner = this.dataSource.createQueryRunner();
    try {
      await queryRunner.connect();
      await queryRunner.startTransaction();
      const order = await queryRunner.manager.findOne(Order, {
        where: { id: id.id },
      });
      const { userID, ...createBody } = body;
      _.assign(order, createBody);
      const updateOrder = await queryRunner.manager.update(Order, id, order);

      const adminAction = new AdminAction();
      adminAction.id = uuid();
      adminAction.action = createBody.status;
      adminAction.orderID = order.id;
      adminAction.userID = userID;
      const newAdminAction = await queryRunner.manager.save(
        AdminAction,
        adminAction
      );
      await queryRunner.commitTransaction();
      return [updateOrder, newAdminAction];
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
  async getOne(id: any) {
    try {
      const result = await this.dataSource
        .createQueryBuilder(Order, "order")
        .select([
          "order.id",
          "order.customerID",
          "order.orderName",
          "order.createdDate",
          "order.totalPrice",
          "order.status",
          "manage.name",
          "adminAction.action",
          "adminAction.dateAction",
        ])
        .leftJoin("order.adminActions", "adminAction")
        .leftJoin("adminAction.manage", "manage")
        .where("order.id=:id", { id: id.id })
        .getOne();
      return result;
    } catch (error) {
      throw error;
    }
  }
  delete(id: string) {
    return this.orderRepository.delete(id);
  }
}
