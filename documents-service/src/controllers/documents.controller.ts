import { Controller, Get } from '@nestjs/common';
import { DocumentsService } from '../services/documents.service';
import { Document } from '../entities/document.entity';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly documents: DocumentsService) {}

  @Get()
  getHello(): Promise<Document> {
    return this.documents.addOne();
  }
}
