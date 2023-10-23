import { Test, TestingModule } from '@nestjs/testing';
import { ReportProductDayController } from './report-product-day.controller';

describe('ReportProductDayController', () => {
  let controller: ReportProductDayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportProductDayController],
    }).compile();

    controller = module.get<ReportProductDayController>(ReportProductDayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
