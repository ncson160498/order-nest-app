import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./entities/product.entity";
import { CreateProductDto } from "./dto/create-product.dto";
import { v4 as uuid } from "uuid";
import * as _ from "lodash";
import { UpdateProductDto } from "./dto/update-product.dto";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {}

  get() {
    return this.productRepository.find();
  }

  async create(body: CreateProductDto) {
    try {
      const newProduct = new Product();
      _.assign(newProduct, body);
      newProduct.id = uuid();
      const result = await this.productRepository.save(newProduct);
      return result;
    } catch (error) {
      throw error;
    }
  }

  update(id: string, body: UpdateProductDto) {
    return this.productRepository.update(id, body);
  }

  getOne(id: any) {
    return this.productRepository.findOne({ where: { id: id.id } });
  }

  delete(id: string) {
    return this.productRepository.delete(id);
  }
}
