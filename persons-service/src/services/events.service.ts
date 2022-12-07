import { Injectable } from '@nestjs/common';
import { EventsEnum } from '../constants';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class EventsService {
  constructor(private readonly httpService: HttpService) {}

  async sendEventToDocumentsMs<T>(event: EventsEnum, data: T): Promise<void> {
    await this.httpService.axiosRef.post('http://127.0.0.1:3700/events', {
      type: event,
      data,
    });
  }
}
