import { Injectable } from "@nestjs/common";
import { Customer } from "src/customer/entities/customer.entity";
import { DataSource } from "typeorm";

@Injectable()
export class ListOrderCustomerService {
  constructor(private dataSource: DataSource) {}

  async getAllOrderOfCustomer(name: any) {
    try {
      const queryBuilder = this.dataSource
        .createQueryBuilder(Customer, "customer")
        .select([
          "customer.id",
          "customer.name",
          "customer.phone",
          "customer.address",
          "order.orderName",
          "order.status",
          "order.createdDate",
          "order.totalPrice",
          "product.name",
          "orderItem.quantity",
          "orderItem.price",
        ]);
      if (name) {
        queryBuilder.andWhere(`LOWER(customer.name) LIKE LOWER(:name)`, {
          name: `%${name}%`,
        });
      }
      const result = queryBuilder
        .leftJoin("customer.orders", "order")
        .leftJoin("order.orderItems", "orderItem")
        .leftJoin("orderItem.product", "product")
        .orderBy("order.createdDate", "ASC")
        .getManyAndCount();
      return result;
    } catch (error) {
      throw error;
    }
  }
  async getOrderToCustomer(id: any) {
    try {
      const result = await this.dataSource
        .createQueryBuilder(Customer, "customer")
        .select([
          "customer.id",
          "customer.name",
          "customer.phone",
          "customer.address",
          "order.orderName",
          "order.status",
          "order.createdDate",
          "order.totalPrice",
          "product.name",
          "orderItem.quantity",
          "orderItem.price",
        ])
        .leftJoin("customer.orders", "order")
        .leftJoin("order.orderItems", "orderItem")
        .leftJoin("orderItem.product", "product")
        .where("customer.id=:id", { id: id.id })
        .orderBy("order.createdDate", "ASC")
        .getManyAndCount();
      return result;
    } catch (error) {
      throw error;
    }
  }
}
