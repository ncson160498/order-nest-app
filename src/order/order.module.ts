import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { Order } from './entities/order.entity';

const SERVICES = [OrderService];

@Module({
  controllers: [OrderController],
  providers: [...SERVICES],
  imports: [TypeOrmModule.forFeature([Order])],
  exports: [...SERVICES],
})
export class OrderModule {}
