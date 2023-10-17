import { OrderItem } from "src/order-item/entities/order-item.entity";
import { Injectable, Controller } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateOrderItemDto } from "./dto/order-item.dto";
import * as _ from "lodash";
import { v4 as uuid } from "uuid";
import { error } from "console";
import { ProductService } from "src/product/product.service";
import { Manage } from "src/manage/entities/manage.entity";
import { Product } from "src/product/entities/product.entity";

@Injectable()
export class OrderItemService {
  constructor(
    @InjectRepository(OrderItem)
    private orderItemRepo: Repository<OrderItem>,
    // @InjectRepository(Product)
    // private productRepository: Repository<Product>  
    ) {}

  async get() {
    return await this.orderItemRepo.find();
  }

  async create(body: CreateOrderItemDto) {
    try {
      const newOrderItem = new OrderItem();
      _.assign(newOrderItem, body);
      newOrderItem.id = uuid();
      // const product = await this.productRepository.getOne(newOrderItem.order_id);
      // let price = parseFloat(product.price) * parseFloat(newOrderItem.quantity);
      // newOrderItem.price = price.toString();
      const result = await this.orderItemRepo.save(newOrderItem);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
