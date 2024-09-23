import { registerAs } from '@nestjs/config';

import { Environment } from '@src/core/models/environment.model';

export default registerAs('configs', (): Environment => {
  return {
    nodeEnv: process.env.NODE_ENV,
    nodePort: Number(process.env.NODE_PORT),
  };
});
