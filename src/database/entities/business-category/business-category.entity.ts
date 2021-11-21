import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("business-category")
class BusinessCategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;
}

export default BusinessCategoryEntity;
