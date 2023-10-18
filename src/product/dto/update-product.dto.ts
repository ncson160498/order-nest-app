import { IsOptional, IsString } from "class-validator";

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  quantity: string;

  @IsString()
  @IsOptional()
  price: string;
}
