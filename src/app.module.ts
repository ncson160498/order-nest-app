import { ProductModule } from "./product/product.module";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { UserModule } from "./user/user.module";
// import { dataSourceOptions } from 'db/data-source';
import { OrderModule } from "./order/order.module";
import { CustomerModule } from "./customer/customer.module";
import { ManageModule } from "./manage/manage.module";
import { dataSourceOptions } from "db/data-source";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderItemModule } from "./order-item/order-item.module";
import { ListOrderController } from "./list-order-admin/list-order-admin.controller";
import { ListOrderModule } from "./list-order-admin/list-order-admin.module";
import { ListOrderCustomerModule } from "./list-order-customer/list-order-customer.module";
import { AdminActionModule } from "./admin-action/admin-action.module";
import { ReportModule } from "./report/report-revenue/report.module";
import { ReportProductDayModule } from "./report/report-product-day/report-product-day.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule,
    OrderModule,
    CustomerModule,
    ManageModule,
    ProductModule,
    OrderItemModule,
    ListOrderModule,
    ListOrderCustomerModule,
    AdminActionModule,
    ReportModule,
    ReportProductDayModule,
  ],
  controllers: [AppController, ListOrderController],
})
export class AppModule {}
