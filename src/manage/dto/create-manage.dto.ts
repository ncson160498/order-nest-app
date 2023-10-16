import { Expose } from "class-transformer";
import { IsNotEmpty, IsString, Length } from "class-validator";
import { isLength } from "lodash";

export class CreateManageDto{
    @Expose()
    @IsNotEmpty()
    @IsString()
    name: string;

    @Expose()
    @IsNotEmpty()
    @IsString()
    phone: string

    @Expose()
    @IsNotEmpty()
    @IsString()
    address: string
}