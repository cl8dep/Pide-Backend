import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import { BusinessServiceEntity } from '../entities';

export class CreateBusinessService implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(BusinessServiceEntity)().createMany(3);
  }
}
