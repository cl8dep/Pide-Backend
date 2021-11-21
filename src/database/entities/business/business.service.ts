import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { paginate } from '~/utils/pagination';
import { IPaginationOptions } from '../../../types/pagination';
import BusinessEntity from './business.entity';
import { REPOSITORY_NAME } from './business.provider';

@Injectable()
export class BusinessService {
  constructor(
    @Inject(REPOSITORY_NAME)
    private businessRepository: Repository<BusinessEntity>,
  ) {}

  async create(args: any) {
    return `This action create an account`;
  }

  paginate(options: IPaginationOptions) {
    return paginate<BusinessEntity>(this.businessRepository, options);
  }

  exist(businessId: string) {
    return this.businessRepository.findOne({
      where: {
        slug: businessId,
      },
    });
  }

  findBySlug(
    slug: string,
    options: { relations: string[] },
  ): BusinessEntity | PromiseLike<BusinessEntity> {
    const { relations } = options;
    return this.businessRepository.findOne({
      where: {
        slug: slug,
      },
      relations: Array.isArray(relations) ? relations : [relations],
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

  async save(entity: BusinessEntity): Promise<BusinessEntity> {
    return await this.businessRepository.save(entity);
  }
}
