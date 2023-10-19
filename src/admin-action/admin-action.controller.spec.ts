import { Test, TestingModule } from '@nestjs/testing';
import { AdminActionController } from './admin-action.controller';

describe('AdminActionController', () => {
  let controller: AdminActionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminActionController],
    }).compile();

    controller = module.get<AdminActionController>(AdminActionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
