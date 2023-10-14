import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { Customer } from './entities/customer.entity';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService],
  imports: [TypeOrmModule.forFeature([Customer])],
})
export class CustomerModule {}
