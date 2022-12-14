
import {
  OneToOne,
  OneToMany,
  JoinColumn,
  ManyToOne,
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column, AfterLoad
} from 'typeorm';
import { PxpEntity } from '@pxp-nd/common';




@Entity({ name: 'person' })
export default class Person extends PxpEntity {

  @PrimaryGeneratedColumn({ name: 'person_id' })
  personId: number;


  @Column({ name: 'gender', type: 'varchar', length: 1, nullable: true })
  gender: string | null;

  @Column({ name: 'first_name', type: 'varchar', length: 100 })
  firstName: string;

  @Column({ name: 'last_name', type: 'varchar', length: 100 })
  lastName: string;

  @Column({ name: 'occupation', type: 'varchar', length: 100 })
  occupation: string;

  @Column({ name: 'country', type: 'varchar', length: 100 })
  country: string;

  @Column({ name: 'age', type: 'varchar', length: 100 })
  age: string;

  @Column({ name: 'person_id_fk', type: 'int', nullable:true })
  personIdFk: number | null;

  fullName: string;

  @AfterLoad()
  setComputed(): void {
    this.fullName = [this.firstName, this.lastName].join(' ');
  }

}
