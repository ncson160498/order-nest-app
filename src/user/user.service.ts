import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  getUser() {
    return { name: 'Cong Son 1', email: 'ncson1604@gmail.com' };
  }
  create(createUserDto: CreateUserDto) {
    return createUserDto;
  }
  update(updateUserDto: UpdateUserDto, userId: number ) {
    return { body: updateUserDto, userId };
  }
  findOne(userId: number) {
    return { userId };
  }
  delete(userId: number ) {
    return userId;
  }
}
