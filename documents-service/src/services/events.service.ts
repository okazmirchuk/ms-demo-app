import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event, EventDoc } from '../entities/event.entity';

@Injectable()
export class EventsService {
  constructor(@InjectModel(Event.name) private eventModel: Model<EventDoc>) {}

  async createOne(
    data: Pick<Event, 'type' | 'personId' | 'language'>,
  ): Promise<Event> {
    const event = new this.eventModel({
      ...data,
      personId: data.personId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return event.save();
  }

  async findOneByPersonId({
    personId,
  }: Pick<Event, 'personId'>): Promise<Event> {
    return this.eventModel.findOne({
      personId,
    });
  }
}
