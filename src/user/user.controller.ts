import { UserService } from './user.service';
import {
  Controller,
  Get,
  Patch,
  Post,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('/user')
export class UserController {
  //   constructor(private userService: UserService) {}
  private userService;
  constructor() {
    this.userService = new UserService();
  }
  @Get()
  getUer() {
    // return { name: 'Cong Son', email: 'ncson1604@gmail.com' };
    return this.userService.getUser();
  }
  @Post()
  store(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  @Patch(':userId')
  update(
    @Body() updateUserDto: UpdateUserDto,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.userService.update(updateUserDto, userId);
  }
  @Get(':userId')
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.findOne(userId);
  }
  @Delete(':userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.delete(userId);
  }
}
