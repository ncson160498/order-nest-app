import { CustomerService } from './customer.service';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
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
//   @Patch(':customerid')
//   update(
//     @Param() customerId: string,
//     @Body() updateCustomerDto: UpdateCustomerDto,
//   ) {
//     return this.customerService.update(updateCustomerDto, customerId);
//   }
//   @Get(':customerid')
//   getCusomer(@Param() customerId: string) {
//     return this.customerService.getOne(customerId);
//   }
}
