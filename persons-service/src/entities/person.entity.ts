import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {ApiExtraModels, ApiProperty} from "@nestjs/swagger";

export enum LanguageEnum {
  EN = 'en',
  DE = 'de',
}

@Entity()
export class Person {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id: string;

  @Column({ type: 'timestamptz' })
  @ApiProperty()
  birthdate: string;

  @Column({ type: 'varchar' })
  @ApiProperty()
  birthCountry: string;

  @Column({ type: 'varchar' })
  @ApiProperty()
  name: string;

  @Column({ type: 'varchar' })
  @ApiProperty()
  language: LanguageEnum;

  @Column({ type: 'varchar' })
  @ApiProperty()
  telephone: string;

  @Column({ type: 'timestamptz' })
  @ApiProperty()
  createdAt: Date;

  @Column({ type: 'timestamptz' })
  @ApiProperty()
  updatedAt: Date;

  @BeforeUpdate()
  setUpdatedAt() {
    this.updatedAt = new Date();
  }

  @BeforeInsert()
  setCreatedAt() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
