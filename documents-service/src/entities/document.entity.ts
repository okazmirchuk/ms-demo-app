import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DocumentDoc = HydratedDocument<Document>;

@Schema()
export class Document {
  @Prop()
  title: string;

  @Prop()
  personId: string;

  @Prop({ type: Date, required: true })
  createdAt: Date;

  @Prop({ type: Date, required: false })
  updatedAt: Date;
}

export const DocumentSchema = SchemaFactory.createForClass(Document);
