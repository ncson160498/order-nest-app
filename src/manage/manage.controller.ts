import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ManageService } from './manage.service';
import { CreateManageDto } from './dto/create-manage.dto';
import { UpdateManageDto } from './dto/update-manage.dto';

@Controller('manage')
export class ManageController {
  constructor(private manageService: ManageService) {}
  @Get()
  getManage() {
    return this.manageService.get();
  }
  @Post()
  store(@Body() createManageDto: CreateManageDto) {
    return this.manageService.create(createManageDto);
  }
  // @Patch(':id')
  // update(@Body()  updateManageDto: UpdateManageDto,@Param() id: string){
  //     return this.namageService.update(updateManageDto,id);
  // }
}
