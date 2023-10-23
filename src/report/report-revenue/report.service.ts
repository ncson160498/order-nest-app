import { Injectable } from "@nestjs/common";
import { time } from "console";
import { query } from "express";
import { Order } from "src/order/entities/order.entity";
import { Product } from "src/product/entities/product.entity";
import { DataSource } from "typeorm";

@Injectable()
export class ReportService {
  constructor(private dataSource: DataSource) {}
  async getRevenueDay(query: any) {
    const { createdDate, endDate, type, product } = query;
    try {
      let start = new Date(createdDate);
      let end = new Date(endDate);
      // console.log('%${type}%');
      // switch(type){
      //   case 'day':
      //     end.setDate(start.getDate() + 1);
      //   case 'week':
      //     end.setDate(start.getDate() + 7);
      //   case 'month':
      //     end.setDate(start.getMonth() + 1);
      // }
      const orderRevenue = await this.dataSource
        .createQueryBuilder(Order, "order")
        .select([
          `date_trunc('${type}',"order"."createdDate") as day`,
          `sum("order"."total_price") as sum`,
        ])
        .where(`order.createdDate BETWEEN :start AND :end`, {
          start: start,
          end: end,
        })
        .groupBy(`date_trunc('${type}',"order"."createdDate")`)
        .getRawMany();
      //      for (const item of orderRevenue) {
      //       console.log(item.sum);
      //     }
      return orderRevenue;
    } catch (error) {
      throw error;
    }
  }
}
