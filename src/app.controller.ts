import { Body, Controller, Delete, Get, Post, Put, Query } from "@nestjs/common";
import { AppService } from "./app.service";
import { ApiTags } from "@nestjs/swagger";
import { UserDTO, UserUpdaetDTO } from "./dto/user.dto";

@ApiTags('User')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(@Query() query: any): string {
    return this.appService.getHello();
  }

  @Post()
  createUser(@Body() body: UserDTO) {
    if (body.username !== undefined && body.password !== undefined) {
      this.appService.createUser(body.username, body.password);
      return "Create user success";
    } else {
      return "Create user fail";
    }
  }

  @Put()
  updateUser(@Body() body: UserUpdaetDTO) {
    if (body.id && body.username && body.password) {
      this.appService.updateUser(body);
      return "Update user success";
    } else {
      return "Update user fail";
    }
  }

  @Delete()
  deleteUser(@Query() query: any) {
    this.appService.deleteUser(query.id)
    return 'User deleted'
  }
}
