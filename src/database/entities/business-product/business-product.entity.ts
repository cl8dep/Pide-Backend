import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import BusinessEntity from '../business/business.entity';

@Entity('business-product')
class BusinessProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column({ nullable: true })
  image?: string;

  @ManyToOne(() => BusinessEntity, (entity) => entity.products)
  business: BusinessEntity;
}

export default BusinessProductEntity;
