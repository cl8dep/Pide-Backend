import { Inject, Injectable } from '@nestjs/common';
import { FindManyOptions, Repository } from 'typeorm';
import { paginate } from '~/utils/pagination';
import { IPaginationOptions } from '../../../types/pagination';
import BusinessProductEntity from './business-product.entity';
import { REPOSITORY_NAME } from './business-product.provider';

@Injectable()
export class BusinessProductService {
  constructor(
    @Inject(REPOSITORY_NAME)
    private businessRepository: Repository<BusinessProductEntity>,
  ) {}

  async create(args: any) {
    return `This action create an account`;
  }

  paginate(options: IPaginationOptions, businessSlug: string) {
    return paginate<BusinessProductEntity>(this.businessRepository, options, {
      relations: ['business'],
      where: {
        business: {
          slug: businessSlug,
        },
      },
    });
  }

  async findAll() {
    return this.businessRepository.find();
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

  async save(entity: BusinessProductEntity): Promise<BusinessProductEntity> {
    return await this.businessRepository.save(entity);
  }
}
