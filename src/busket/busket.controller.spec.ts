import { Test, TestingModule } from '@nestjs/testing';
import { BusketController } from './busket.controller';

describe('BusketController', () => {
  let controller: BusketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusketController],
    }).compile();

    controller = module.get<BusketController>(BusketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
