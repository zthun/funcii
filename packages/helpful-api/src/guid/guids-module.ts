import { Module } from '@nestjs/common';
import { ZGuidsController } from './guids-controller';

@Module({
  controllers: [ZGuidsController]
})
export class ZGuidsModule {}
