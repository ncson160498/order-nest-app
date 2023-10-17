import { Module } from '@nestjs/common';
import { OrderItemController } from './order-item.controller';
import { OrderItemService } from './order-item.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItem } from './entities/order-item.entity';

@Module({
  controllers: [OrderItemController],
  providers: [OrderItemService],
  imports: [TypeOrmModule.forFeature([OrderItem])]
})
export class OrderItemModule {}
