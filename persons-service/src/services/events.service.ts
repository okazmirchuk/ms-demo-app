import { Injectable } from '@nestjs/common';
import { EventsEnum } from '../constants';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class EventsService {
  constructor(private readonly httpService: HttpService) {}

  async sendEventToDocumentsMs<T>(event: EventsEnum, data: T): Promise<void> {
    this.httpService.post('http://127.0.0.1:4000', {
      type: event,
      data,
    });
  }
}
