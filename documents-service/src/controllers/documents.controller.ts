import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { DocumentsService } from '../services/documents.service';
import { Document } from '../entities/document.entity';
import { CreateDocumentDto } from '../dtos/create-document.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('documents')
@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Post()
  async createOne(@Body() body: CreateDocumentDto): Promise<Document> {
    return this.documentsService.createOne(body);
  }

  @Get()
  async getAllByPersonId(
    @Query('personId') personId: string,
  ): Promise<Document[]> {
    return this.documentsService.findManyByPersonId({ personId });
  }
}
