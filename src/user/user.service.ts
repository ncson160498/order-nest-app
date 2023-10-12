import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  get() {
    return { name: 'Cong Son 1', email: 'ncson1604@gmail.com' };
    // return this.userRepository.find();
  }
  create(createUserDto: CreateUserDto) {
    return createUserDto;
  }
  update(updateUserDto: UpdateUserDto, userId: number) {
    return { body: updateUserDto, userId };
  }
  show(userId: number) {
    return { userId };
  }
  delete(userId: number) {
    return { userId };
  }
}
