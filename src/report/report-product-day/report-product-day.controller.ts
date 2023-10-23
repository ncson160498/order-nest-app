import { Controller, Get, Query } from "@nestjs/common";
import { ReportProductDayService } from "./report-product-day.service";

@Controller("report-product-day")
export class ReportProductDayController {
  constructor(private reportProductDayService: ReportProductDayService) {}
  @Get()
  getRevenueProductOfDay(@Query() query: any) {
    // console.log(time);
    return this.reportProductDayService.getRevenueProductOfDay(query);
  }
}
