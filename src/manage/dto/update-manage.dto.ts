import { Expose } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateManageDto{
    
    @IsString()
    name: string;

  
    @IsString()
    phone: string

   
    @IsString()
    address: string
}