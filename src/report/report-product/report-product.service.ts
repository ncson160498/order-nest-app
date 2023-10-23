import { Injectable } from "@nestjs/common";
import { Product } from "src/product/entities/product.entity";
import { DataSource } from "typeorm";

@Injectable()
export class ReportProductService {
  constructor(private dataSource: DataSource) {}
  async getRevenueProduct(query: any) {
    const { product } = query;

    try {
      const queryBuilder = await this.dataSource
        .createQueryBuilder()
        .select([
          "product.name",
          "product.quantity",
          "product.price",
          "SUM(orderItem.quantity) as Sold",
          "SUM(orderItem.price) as Price",
        ])
        .from(Product, "product");
      if (product) {
        queryBuilder.andWhere(`LOWER(product.name) LIKE LOWER(:product)`, {
          product: `%${product}%`,
        });
      }
      console.log(query);
      const result = await queryBuilder
        .leftJoin("product.orderItems", "orderItem")
        .groupBy("product.id")
        .getRawMany();
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
