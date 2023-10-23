import { Test, TestingModule } from '@nestjs/testing';
import { ReportProductController } from './report-product.controller';

describe('ReportProductController', () => {
  let controller: ReportProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportProductController],
    }).compile();

    controller = module.get<ReportProductController>(ReportProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
