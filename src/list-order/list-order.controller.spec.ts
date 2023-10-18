import { Test, TestingModule } from '@nestjs/testing';
import { ListOrderController } from './list-order.controller';

describe('ListOrderController', () => {
  let controller: ListOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListOrderController],
    }).compile();

    controller = module.get<ListOrderController>(ListOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
