import {
  Controller,
  DefaultValuePipe,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { TextResources } from '~/assets';
import BusinessEntity from '~/database/entities/business/business.entity';
import { BusinessService } from '~/database/entities/business/business.service';
import { Pagination } from '~/types/pagination';

@Controller('api/v1/business')
export class BusinessController {
  businessService: BusinessService;

  constructor(businessService: BusinessService) {
    this.businessService = businessService;
  }

  @Get()
  async getAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ): Promise<Pagination<BusinessEntity>> {
    return await this.businessService.paginate({
      page,
      limit,
      route: 'http://localhost:3000/api/v1/business-category',
    });
  }

  @Get(':slug')
  async findBySlug(
    @Param('slug') slug: string,
    @Query('relations') relations: string[] = [],
  ): Promise<BusinessEntity> {
    const business = await this.businessService.findBySlug(slug, { relations });
    if (business) return business;
    else
      throw new NotFoundException(
        'Business',
        TextResources.BUSINESS_NOT_FOUNDED,
      );
  }
}
