import { Module } from '@nestjs/common';
import { ZGuidsModule } from '../guid/guids-module';

@Module({
  imports: [ZGuidsModule]
})
export class ZHelpfulModule {}
