import { Injectable } from '@nestjs/common';
import { Document, DocumentDoc } from '../entities/document.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectModel(Document.name) private docModel: Model<DocumentDoc>,
  ) {}

  async createOne(
    data: Pick<Document, 'title' | 'personId'> & { language: string },
  ): Promise<Document> {
    const doc = new this.docModel({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return doc.save();
  }

  async findManyByPersonId(
    data: Pick<Document, 'personId'>,
  ): Promise<Document[]> {
    return this.docModel.find({
      personId: data.personId,
    });
  }
}
