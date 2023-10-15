import { Expose } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateManageDto{
    
    @IsString()
    Name: string;

  
    @IsString()
    Phone: string

   
    @IsString()
    Address: string
}