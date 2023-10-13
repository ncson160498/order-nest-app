import { IsEmail, IsString } from 'class-validator';
import { Unique } from 'typeorm';
@Unique(['email'])
export class UpdateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  description: string;
}
