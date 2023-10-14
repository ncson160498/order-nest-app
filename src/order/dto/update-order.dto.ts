import { IsString } from 'class-validator';

export class UpdateOrderDto {
  @IsString()
  Order_Name: string;

  @IsString()
  Status: string;
}
