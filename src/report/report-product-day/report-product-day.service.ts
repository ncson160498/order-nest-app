import { Injectable } from "@nestjs/common";
import { Product } from "src/product/entities/product.entity";
import { DataSource } from "typeorm";

@Injectable()
export class ReportProductDayService {
  constructor(private dataSource: DataSource) {}
  async getRevenueProductOfDay(query: any) {
    const { startTime, endTime, type, product1 } = query;
    try {
      let start = new Date(startTime);
      let end = new Date(endTime);
      end.setDate(start.getDate() + 1);
      const queryBuilder = await this.dataSource
        .createQueryBuilder(Product, "product")
        .select([
          "product.name",
          `date_trunc('${type}',"order"."createdDate") as day`,
          "SUM(orderItem.quantity) as Sold",
          "SUM(orderItem.price) as Price",
        ]);
      if (product1) {
        queryBuilder.where(`LOWER(product.name) LIKE LOWER(:product)`, {
          product: `%${product1}%`,
        });
      }
      const result = await queryBuilder
        .leftJoin("product.orderItems", "orderItem")
        .leftJoin("orderItem.order", "order")
        .andWhere(`order.createdDate BETWEEN :start AND :end`, {
          start: start,
          end: end,
        })
        .groupBy(`date_trunc('${type}',"order"."createdDate")`)
        .addGroupBy("product.name")
        // .addGroupBy("product.id")
        // .groupBy(["orderItem.orderID","product.name")
        .getRawMany();
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
