import { Expose } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateManageDto{
    @Expose()
    @IsNotEmpty()
    @IsString()
    Name: string;

    @Expose()
    @IsNotEmpty()
    @IsString()
    Phone: string

    @Expose()
    @IsNotEmpty()
    @IsString()
    Address: string
}