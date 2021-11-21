import { Inject, Injectable } from '@nestjs/common';
import { FindManyOptions, Repository } from 'typeorm';
import { IPaginationOptions } from '~/types/pagination';
import { paginate } from '~/utils/pagination';
import BusinessCategoryEntity from './business-category.entity';
import { REPOSITORY_NAME } from './business-category.provider';

@Injectable()
export class BusinessCategoryService {
  
  constructor(
    @Inject(REPOSITORY_NAME)
    private businessCategoryRepository: Repository<BusinessCategoryEntity>,
  ) {}

  async create(args: any) {
    return `This action create an account`;
  }
  
  paginate(options: IPaginationOptions) {
    return paginate<BusinessCategoryEntity>(this.businessCategoryRepository, options);
  }

  async findAll(limit?: number, offset: number = 0) {
    const config: FindManyOptions = {
      skip: offset
    };

    if (limit) config.take = limit;

    return this.businessCategoryRepository.findAndCount(config);
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

  async save(entity: BusinessCategoryEntity): Promise<BusinessCategoryEntity> {
    return await this.businessCategoryRepository.save(entity);
  }
}
