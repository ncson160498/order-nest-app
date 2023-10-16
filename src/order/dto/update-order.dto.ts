import { IsString } from 'class-validator';

export class UpdateOrderDto {
  @IsString()
  order_name: string;

  @IsString()
  status: number;
}
