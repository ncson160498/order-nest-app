import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateManageDto } from './dto/create-manage.dto';
import { Repository } from 'typeorm';
import { UpdateManageDto } from './dto/update-manage.dto';
import { Manage } from './entities/manage.entity';
import { v4 as uuid } from 'uuid';
import * as _ from 'lodash';
@Injectable()
export class ManageService {
  constructor(
    @InjectRepository(Manage)
    private manageRepository: Repository<Manage>,
  ) {}
  get() {
    return this.manageRepository.find();
  }
  async create(body: CreateManageDto) {
    try {
      const newManage = new Manage();
      _.assign(newManage, body);
      newManage.id = uuid();
      const result = await this.manageRepository.save(newManage);
      return result;
    } catch (error) {
      throw error;
    }
  }
  update(data: any, updateManageDto: UpdateManageDto) {
    return this.manageRepository.update(data.id, updateManageDto);
  }
  getOne(data: any) {
    return this.manageRepository.findOne({ where: { id: data.id } });
  }
  delete(data: any) {
    return this.manageRepository.delete(data.id);
  }
}
