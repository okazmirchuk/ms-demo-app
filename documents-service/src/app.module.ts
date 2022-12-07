import { Module } from '@nestjs/common';
import { DocumentsController } from './controllers/documents.controller';
import { DocumentsService } from './services/documents.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DocumentSchema, Document } from './entities/document.entity';
import { EventsService } from './services/events.service';
import { EventsController } from './controllers/events.controller';
import { Event, EventSchema } from './entities/event.entity';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1'),
    MongooseModule.forFeature([
      { name: Document.name, schema: DocumentSchema },
      { name: Event.name, schema: EventSchema },
    ]),
  ],
  controllers: [DocumentsController, EventsController],
  providers: [DocumentsService, EventsService],
})
export class AppModule {}
