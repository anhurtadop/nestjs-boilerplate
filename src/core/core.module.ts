import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import config from '@src/core/configs/config';
import { environment } from './configs/environment';
import joiSchema from './configs/joi-schema';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environment[process.env.NODE_ENV] || '.env',
      isGlobal: true,
      load: [config],
      validationSchema: joiSchema,
    }),
  ],
  exports: [ConfigModule],
})
export class CoreModule {}
