import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EventDoc = HydratedDocument<Event>;

@Schema()
export class Event {
  @Prop()
  type: string;

  @Prop()
  personId: string;

  @Prop()
  language: string;

  @Prop({ type: Date, required: true })
  createdAt: Date;

  @Prop({ type: Date, required: false })
  updatedAt: Date;
}

export const EventSchema = SchemaFactory.createForClass(Event);
