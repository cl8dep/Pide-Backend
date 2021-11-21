import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import BusinessCategoryEntity from '../entities/business-category/business-category.entity';

export class CreateBusinessCategory implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(BusinessCategoryEntity)().createMany(10);
  }
}
