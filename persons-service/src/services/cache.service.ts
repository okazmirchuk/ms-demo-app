import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Person } from '../entities/person.entity';
import { Cache } from 'cache-manager';

const ttl = 300000; // 5 min

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async setOne(data: Person): Promise<void> {
    const persons = (await this.cacheManager.get<Person[]>('persons')) || [];

    await this.cacheManager.set('persons', [...persons, data], ttl);
  }

  async getAll(): Promise<Person[]> {
    return this.cacheManager.get<Person[]>('persons');
  }

  async reindex(data: Person[]) {
    await this.cacheManager.del('persons');

    await this.cacheManager.set('persons', data, ttl);
  }
}
