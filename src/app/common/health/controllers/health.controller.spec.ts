import { Test, TestingModule } from '@nestjs/testing';

import { HealthController } from './health.controller';
import { HealthService } from '../services/health.service';

describe('HealthController', () => {
  let controller: HealthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [HealthService],
    }).compile();

    controller = module.get<HealthController>(HealthController);
  });

  describe('root', () => {
    it('should be response', () => {
      expect(controller.getHealth().code).toBe(200);
      expect(controller.getHealth().message).toBe('It works!');
      expect(controller.getHealth().data).toBe(null);
    });
  });
});
