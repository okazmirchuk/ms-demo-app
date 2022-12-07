import { Inject, Injectable } from '@nestjs/common';
import { DYNAMO_DB_CONNECTION } from '../dynamo.module';
import { Document } from '../entities/document.entity';

@Injectable()
export class DocumentsService {
  constructor(@Inject(DYNAMO_DB_CONNECTION) private dynamoClient) {}

  async addOne(data): Promise<Document> {}
}
