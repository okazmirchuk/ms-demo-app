import { Injectable } from '@nestjs/common';
import { Person } from '../entities/person.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CacheService } from './cache.service';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(Person)
    private readonly accountRepo: Repository<Person>,
    private readonly cacheService: CacheService,
  ) {}

  async createOne(
    data: Pick<
      Person,
      'name' | 'birthdate' | 'birthCountry' | 'language' | 'telephone'
    >,
  ): Promise<Person> {
    const { birthdate, birthCountry, language, telephone, name } = data;

    const person = await this.accountRepo.create({
      birthdate,
      birthCountry,
      language,
      telephone,
      name,
    });

    await this.accountRepo.save(person);

    await this.cacheService.setOne(person);

    return person;
  }

  async findAll(): Promise<Person[]> {
    return this.accountRepo.find();
  }
}
