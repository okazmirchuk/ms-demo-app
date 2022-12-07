import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { CacheService } from './cache.service';
import { PersonsService } from './persons.service';

@Injectable()
export class TasksService {
  constructor(
    private readonly cacheService: CacheService,
    private readonly personsService: PersonsService,
  ) {}

  @Cron(CronExpression.EVERY_5_MINUTES)
  async handleCron() {
    const persons = await this.personsService.findAll();

    this.cacheService.reindex(persons);
  }
}
