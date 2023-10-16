import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './entities/customer.entity';
import { UpdateCustomerDto } from './dto/update-customer.dto';
// import * as uuid from 'uuid';
import { v4 as uuid } from 'uuid';
import * as _ from 'lodash';
@Injectable()
export class CustomerService {
  [x: string]: any;
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}
  get() {
    return this.customerRepository.find();
  }
  // create(@Body() createCustomerDto: CreateCustomerDto) {
  //   return this.customerRepository.save(createCustomerDto);
  // }
  async create(body: CreateCustomerDto) {
    try {
      const newCustomer = new Customer();
      _.assign(newCustomer, body);
      newCustomer.id = uuid();
      const result = await this.customerRepository.save(newCustomer);
      return result;
      // await this.customerRepository.save(newCustomer);
    } catch (error) {
      throw error;
    }
  }
  update(data: any, updateCustomerDto: UpdateCustomerDto) {
    console.log(data);
    return this.customerRepository.update(data.id, updateCustomerDto);
  }
  getOne(data: any) {
    return this.customerRepository.findOne({ where: { id: data.id } });
  }
  delete(data: any) {
    return this.customerRepository.delete(data.id);
  }
}
