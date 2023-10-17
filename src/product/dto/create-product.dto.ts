import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @Expose()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  quantity: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  price: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  manage_id: string;
}
