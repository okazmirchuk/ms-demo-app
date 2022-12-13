import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { Person } from '../entities/person.entity';
import { PersonsService } from '../services/persons.service';
import { CreatePersonDto } from '../dtos/create-person.dto';
import { CacheService } from '../services/cache.service';
import { EventsService } from '../services/events.service';
import { EventsEnum } from '../constants';

@ApiTags('persons')
@Controller('persons')
@ApiExtraModels(Person)
export class PersonsController {
  constructor(
    private readonly personsService: PersonsService,
    private readonly cacheService: CacheService,
    private readonly eventsService: EventsService,
  ) {}

  @Get()
  findAll(): Promise<Person[]> {
    return this.cacheService.getAll();
  }

  @Post()
  async createOne(@Body() body: CreatePersonDto): Promise<Person> {
    const person = await this.personsService.createOne(body);

    this.eventsService.sendEventToDocumentsMs(EventsEnum.PERSON_CREATED, {
      personId: person.id,
      language: person.language,
    });

    return person;
  }
}
