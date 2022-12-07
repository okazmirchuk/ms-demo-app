import { Body, Controller, Post } from '@nestjs/common';
import { CreateEventDto } from '../dtos/create-event.dto';
import { EventsService } from '../services/events.service';
import { Event } from '../entities/event.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('events')
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  async createOne(@Body() body: CreateEventDto): Promise<Event> {
    return this.eventsService.createOne(body);
  }
}
