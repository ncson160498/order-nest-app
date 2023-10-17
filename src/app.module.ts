import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
// import { dataSourceOptions } from 'db/data-source';
import { OrderModule } from './order/order.module';
import { CustomerModule } from './customer/customer.module';
import { ManageModule } from './manage/manage.module';
import { TypeormLoader } from './loaders/typeormLoader';

@Module({
  imports: [
    TypeormLoader,
    UserModule,
    OrderModule,
    CustomerModule,
    ManageModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
