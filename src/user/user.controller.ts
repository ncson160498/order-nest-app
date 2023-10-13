// import { UserService } from './user.service';
// import {
//   Controller,
//   Get,
//   Patch,
//   Post,
//   Delete,
//   Param,
//   Body,
//   ParseIntPipe,
// } from '@nestjs/common';
// import { UpdateUserDto } from './dto/update-user.dto';
// import { CreateUserDto } from './dto/create-user.dto';

// @Controller('/user')
// export class UserController {
//   constructor(private userService: UserService) {}

//   @Get()
//   getUer() {
//     // return { name: 'Cong Son', email: 'ncson1604@gmail.com' };
//     return this.userService.getUser();
//   }
//   @Post()
//   store(@Body() createUserDto: CreateUserDto) {
//     return this.userService.create(createUserDto);
//   }
//   @Patch(':userId')
//   update(
//     @Body() updateUserDto: UpdateUserDto,
//     @Param('userId', ParseIntPipe) userId: number,
//   ) {
//     return this.userService.update(updateUserDto, userId);
//   }
//   @Get(':userId')
//   getUser(@Param('userId', ParseIntPipe) userId: number) {
//     return this.userService.findOne(userId);
//   }
//   @Delete(':userId')
//   deleteUser(@Param('userId', ParseIntPipe) userId: number) {
//     return this.userService.delete(userId);
//   }
// }
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUsers() {
    return this.userService.get();
  }

  @Post()
  store(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Patch('/:userId')
  update(
    @Body() updateUserDto: UpdateUserDto,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.userService.update(updateUserDto, userId);
  }

  @Get('/:userId')
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.show(userId);
  }

  @Delete('/:userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.delete(userId);
  }
}
