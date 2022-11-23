import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthorizationGuard } from '../http/authorization/authorization.guard';

@Controller('test')
export class TestController {
  @Get()
  @UseGuards(AuthorizationGuard)
  hello() {
    return 'Hello World!';
  }
}
