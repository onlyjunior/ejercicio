import { InMemoryDBV1Service, InMemoryDBV1Entity } from '@nestjs-addons/in-memory-db';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';


export interface UserEntity extends InMemoryDBV1Entity {
  firstName: string;
  lastName: string;
  age: number;
}


@Controller()
export class AppController {
  constructor(private readonly userService: InMemoryDBV1Service<UserEntity>) {}

  @Get('users')
  getAllUsers(): UserEntity[] {
    return this.userService.getAll();
  }



  @Get('users/:id')
  getUser(@Param('id') id: string): UserEntity {
    return this.userService.get(+id);
  }



  @Delete('users/:id')
  deleteUser(@Param('id') id: string) {
    return this.userService.delete(+id), id;
  }

  @Post('users')
  createUser(@Body() user: UserEntity): UserEntity {
    return this.userService.create(user);
  }
}

