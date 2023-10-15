import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Manage } from './entities/manage.entity';
import { CreateManageDto } from './dto/create-manage.dto';
import { Repository } from 'typeorm';
import { UpdateManageDto } from './dto/update-manage.dto';

@Injectable()
export class ManageService {
    constructor(
        @InjectRepository(Manage)
        private manageRepository: Repository<Manage>,
     ){}
     get(){
        return this.manageRepository.find();
     }
     create(createManageDto: CreateManageDto){
        return this.manageRepository.save(createManageDto);
     }
     update(@Body() updateManageDto: UpdateManageDto,@Param() data:any){
        console.log(data)
        return this.manageRepository.update(updateManageDto,data);
     }
     getOne(@Param() data:any){
        return this.manageRepository.findOne(data);
     }
     delete(@Param() data:any){
        return this.manageRepository.delete(data);
     }

}
