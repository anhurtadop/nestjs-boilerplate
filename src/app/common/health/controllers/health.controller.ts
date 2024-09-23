import { Controller, Get } from '@nestjs/common';

import { HealthService } from './../services/health.service';
import { Routing } from '@src/core/models/routing.model';
import { HttpResponse } from '@src/core/models/http-response.model';

@Controller(`${Routing.COMMON}/health`)
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  getHealth(): HttpResponse {
    const data = this.healthService.getHealth();
    return {
      code: 200,
      message: data,
      data: null,
    };
  }
}
