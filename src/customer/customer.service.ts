import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './entities/customer.entity';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}
  get() {
    return this.customerRepository.find();
  }
  create(createCustomerDto: CreateCustomerDto) {
    return this.customerRepository.save(createCustomerDto);
  }
//   update(updateCustomerDto: UpdateCustomerDto, data: any) {
//     console.log(data);
//     return this.customerRepository.update(updateCustomerDto, data);
//   }
//   getOne(data: any) {
//     return this.customerRepository.findOne({ where: { id: data.id } });
//   }
}
