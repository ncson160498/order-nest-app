import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ManageService } from './manage.service';
import { CreateManageDto } from './dto/create-manage.dto';
import { UpdateManageDto } from './dto/update-manage.dto';

@Controller('manage')
export class ManageController {
  constructor(private manageService: ManageService) {}
  @Get()
  getManages() {
    return this.manageService.get();
  }
  @Post()
  store(@Body() createManageDto: CreateManageDto) {
    return this.manageService.create(createManageDto);
  }
  @Patch(':id')
  update(@Param() id: string, @Body() updateManageDto: UpdateManageDto) {
    return this.manageService.update(id, updateManageDto);
  }
  @Get(':id')
  getManage(@Param() id: string) {
    return this.manageService.getOne(id);
  }
  @Delete(':id')
  deleteManage(@Param() id: string) {
    return this.manageService.delete(id);
  }
}
