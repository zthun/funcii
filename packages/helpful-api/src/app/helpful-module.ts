import { Module } from '@nestjs/common';
import { ZGuidsModule } from '../guid/guids-module';
import { ZHealthModule } from '../health/health.module';

@Module({
  imports: [ZGuidsModule, ZHealthModule]
})
export class ZHelpfulModule {}
