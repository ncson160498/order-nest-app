import { Test, TestingModule } from '@nestjs/testing';
import { ListOrderService } from './list-order.service';

describe('ListOrderService', () => {
  let service: ListOrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListOrderService],
    }).compile();

    service = module.get<ListOrderService>(ListOrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
