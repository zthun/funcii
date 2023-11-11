import { Module } from '@nestjs/common';
import { ZGuidsModule } from 'src/guid/guids-module';

@Module({
  imports: [ZGuidsModule]
})
export class ZHelpfulModule {}
