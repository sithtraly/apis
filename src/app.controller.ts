import { Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query() query: any): string {
    return this.appService.getHello() + ' ' + query.id;
  }

  @Post()
  postHello() {
    return 'This is post method';
  }
}
