import { Controller, Header, HttpCode, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { createGuid } from '@zthun/helpful-fn';

@ApiTags('Guids')
@Controller('guids')
export class ZGuidsController {
  @Post()
  @Header('content-type', 'text/plain')
  @HttpCode(200)
  @ApiOkResponse({ description: 'Guid (UUID) created.  Nothing is stored' })
  public create(): Promise<string> {
    return Promise.resolve(createGuid());
  }
}
