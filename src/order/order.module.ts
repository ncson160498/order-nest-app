import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { OrderController } from "./order.controller";
import { OrderService } from "./order.service";
import { Order } from "./entities/order.entity";
import { ProductService } from "src/product/product.service";
import { Product } from "src/product/entities/product.entity";

const SERVICES = [OrderService];

@Module({
  controllers: [OrderController],
  providers: [OrderService],
  imports: [TypeOrmModule.forFeature([Order, Product])],
  exports: [...SERVICES],
})
export class OrderModule {}
