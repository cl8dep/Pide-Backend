import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import BusinessServiceEntity from './business-service.entity';
import { REPOSITORY_NAME } from './business-service.provider';

@Injectable()
export class BusinessServiceService {
  constructor(
    @Inject(REPOSITORY_NAME)
    private businessServiceRepository: Repository<BusinessServiceEntity>,
  ) {}

  async create(args: any) {
    return `This action create an account`;
  }

  async findAll() {
    return this.businessServiceRepository.find();
  }

  async findOne(email: string) {
    return `This action returns an account`;
  }

  update(id: number, args: any) {
    return `This action updates an account`;
  }

  async remove(id: string) {
    return `This action remove an account`;
  }

  async save(entity: BusinessServiceEntity): Promise<BusinessServiceEntity> {
    return await this.businessServiceRepository.save(entity);
  }
}
