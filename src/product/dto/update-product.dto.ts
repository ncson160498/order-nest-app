import { IsString } from "class-validator"

export class UpdateProductDto{
    @IsString()
    name:string

    @IsString()
    quantity:string

    @IsString()
    price:string
}