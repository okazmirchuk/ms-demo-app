import { Module } from '@nestjs/common';
import { DocumentsController } from './controllers/documents.controller';
import { DocumentsService } from './services/documents.service';
import { DynamoModule } from './dynamo.module';

@Module({
  imports: [DynamoModule],
  controllers: [DocumentsController],
  providers: [DocumentsService],
})
export class AppModule {}
