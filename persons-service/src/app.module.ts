import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { PersonsController } from './controllers/persons.controller';
import { PersonsService } from './services/persons.service';
import { CacheService } from './services/cache.service';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './services/task.service';
import { HttpModule } from '@nestjs/axios';
import {EventsService} from "./services/events.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Person]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5439,
      username: 'root',
      password: 'root',
      database: 'app',
      entities: [Person],
      synchronize: true,
      logging: true,
    }),
    CacheModule.register({
      closeClient: true,
      store: 'memory',
    }),
    ScheduleModule.forRoot(),
    HttpModule,
  ],
  controllers: [PersonsController],
  providers: [PersonsService, CacheService, TasksService, EventsService],
})
export class AppModule {}
