import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { DocumentsService } from '../services/documents.service';
import { Document } from '../entities/document.entity';
import { CreateDocumentDto } from '../dtos/create-document.dto';
import { ApiTags } from '@nestjs/swagger';
import { EventsService } from '../services/events.service';

@ApiTags('documents')
@Controller('documents')
export class DocumentsController {
  constructor(
    private readonly documentsService: DocumentsService,
    private readonly eventsService: EventsService,
  ) {}

  @Post()
  async createOne(@Body() body: CreateDocumentDto): Promise<Document> {
    return this.documentsService.createOne(body);
  }

  @Get()
  async getAllByPersonId(
    @Query('personId') personId: string,
  ): Promise<Document[]> {
    const { language } = await this.eventsService.findOneByPersonId({
      personId,
    });

    const data = await this.documentsService.findManyByPersonId({ personId });

    data.forEach((doc) => {
      doc.title = this.wrapTitle({ title: doc.title, language });
    });

    return data;
  }

  private wrapTitle({
    title,
    language,
  }: Pick<Document, 'title'> & { language: string }) {
    switch (language) {
      case 'en':
        return `<english>${title}</english>`;
      case 'de':
        return `<german>${title}</german>`;
    }
  }
}
