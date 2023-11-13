import { Controller, Get, HttpCode } from '@nestjs/common';
import { ApiNoContentResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('health')
@Controller('health')
export class ZHealthController {
  @Get()
  @HttpCode(204)
  @ApiNoContentResponse({ description: 'The service is healthy' })
  public read(): Promise<void> {
    return Promise.resolve();
  }
}
