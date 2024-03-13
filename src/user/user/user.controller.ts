import { Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('/api/users')
export class UserController {
  @Get('/hello')
  sayHello(
    @Query('first_name') firstName: string,
    @Query('last_name') lastName: string,
  ): string {
    return `Hello ${firstName} ${lastName}`;
  }

  @Get('/username/:username')
  getByUsername(@Param('username') username: string): string {
    return `Your username: ${username}`;
  }

  @Get('/:id')
  getById(@Req() request: Request): string {
    return `GET ${request.params.id}`;
  }

  @Post()
  post(): string {
    return 'POST';
  }

  @Get('/sample')
  get(): String {
    return 'Hello NestJS';
  }
}
