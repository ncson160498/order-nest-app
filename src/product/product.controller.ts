import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getProducts() {
    return this.productService.get();
  }

  @Post()
  store(@Body() body: CreateProductDto) {
    return this.productService.create(body);
  }

  @Patch(':id')
  update(@Param() id: string, @Body() body: UpdateProductDto) {
    return this.productService.update(id, body);
  }

  @Get(':id')
  getProduct(@Param() id:string){
    return this.productService.getOne(id);
  }
  @Delete(':id')
  deleteProduct(@Param() id:string){
    return this.productService.delete(id);
  }
}
