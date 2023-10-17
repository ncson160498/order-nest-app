import { Module } from "@nestjs/common";
import { OrderItemController } from "./order-item.controller";
import { OrderItemService } from "./order-item.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderItem } from "./entities/order-item.entity";
import { ProductModule } from "src/product/product.module";
import { Product } from "src/product/entities/product.entity";

@Module({
  controllers: [OrderItemController],
  providers: [OrderItemService],
  imports: [TypeOrmModule.forFeature([OrderItem]), ProductModule],
})
export class OrderItemModule {}
