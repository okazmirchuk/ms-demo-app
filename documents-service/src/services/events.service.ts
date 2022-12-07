import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event, EventDoc } from '../entities/event.entity';

@Injectable()
export class EventsService {
  constructor(@InjectModel(Event.name) private eventModel: Model<EventDoc>) {}

  async createOne(data: Pick<Event, 'type' | 'personId'>): Promise<Event> {
    const event = new this.eventModel({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return event.save();
  }
}
