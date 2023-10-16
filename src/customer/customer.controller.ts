import { CustomerService } from './customer.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}
  @Get()
  getCustomers() {
    return this.customerService.get();
  }
  @Post()
  store(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }
  @Patch(':id')
  update(
    @Param() customerId: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customerService.update(customerId, updateCustomerDto);
  }
  //   @Get(':customerid')
  //   getCusomer(@Param() customerId: string) {
  //     return this.customerService.getOne(customerId);
  //   }
  @Get(':id')
  getCustomer(@Param() id: string) {
    return this.customerService.getOne(id);
  }
  @Delete(':id')
  deleteCustomer(@Param() id: string) {
    return this.customerService.delete(id);
  }
}
