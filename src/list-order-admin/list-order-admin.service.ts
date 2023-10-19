import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { get } from "lodash";
import { Customer } from "src/customer/entities/customer.entity";
import { OrderItem } from "src/order-item/entities/order-item.entity";
import { Order } from "src/order/entities/order.entity";
import { Product } from "src/product/entities/product.entity";
import { DataSource, Repository, createQueryBuilder } from "typeorm";

@Injectable()
export class ListOrderService {
  constructor(private dataSource: DataSource) {}

  //   async getListOrder() {
  //     try {
  //       const result = await this.dataSource
  //         .createQueryBuilder(Order, "order")
  //         .select([])
  //         .addSelect("customer.name", "customer_name")
  //         .addSelect("item.quantity", "item_quantity")
  //         .addSelect("product.*", "product_")
  //         // .addSelect("product.price", "product_price")
  //         .innerJoin(Customer, "customer", "order.customerID=customer.id")
  //         .innerJoin(OrderItem, "item", "order.id=item.orderID")
  //         .innerJoin(Product, "product", "product.id=item.productID")
  //         .getMany();
  //       return result;
  //     } catch (error) {}
  //   }
  async getListOrder(name: any) {
    try {
      console.log("name: ", name);
      const queryBuilder = this.dataSource
        .createQueryBuilder(Order, "order")
        .select([
          "order.id",
          "order.customerID",
          "order.createdDate",
          "order.orderName",
          "orderItem.id",
          "orderItem.quantity",
          "product.id",
        ]);

      if (name) {
        queryBuilder.andWhere(`LOWER(order.orderName) LIKE LOWER(:name)`, {
          name: `%${name}%`,
        });
      }
      // .addSelect("product.price", "product_price")
      const result = await queryBuilder
        .leftJoin("order.orderItems", "orderItem")
        .leftJoin("orderItem.product", "product")
        .orderBy("order.createdDate", "ASC")
        .take(10)
        .skip(0)
        .getManyAndCount();
      return result;
    } catch (error) {
      throw error;
    }
  }
  async getOneOrder(id: any) {
    // const iD={where: { id: id.id }};
    // const order = await this.orderRepo.findOne({ where: { id: id.id } });
    // const customer = await this.productRepo.find({where:{id: order.customerID}});
    // const orderWithOrderItem = await this.orderItemRepo.find({
    //   where: { orderID: order.id },
    // });
    // const result= await this.dataSource.createQueryBuilder()
    // .innerJoin()

    // const orderWithProduct = await this.productRepo.find({where:{id: orderWithOrderItem.map()}})
    // console.log(orderWithOrderItem);

    try {
      console.log(id);
      const result = await this.dataSource
        .createQueryBuilder(Order, "order")
        .select([
          "order.id",
          "order.customerID",
          "order.createdDate",
          "orderItem.id",
          "order.orderName",
          "orderItem.quantity",
          "product.id",
        ])

        // .addSelect("product.price", "product_price")
        .leftJoin("order.orderItems", "orderItem")
        .leftJoin("orderItem.product", "product")
        .where("order.id=:Name", { Name: id.id })
        .getMany();

      return result;
    } catch (error) {
      throw error;
    }
    // const result = awai
    // const orderWithOrderItem = await this.orderItemRepo.fin
  }
}
