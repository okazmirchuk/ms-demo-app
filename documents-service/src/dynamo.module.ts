import { Module } from '@nestjs/common';
import { DynamoDB } from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export const DYNAMO_DB_CONNECTION = 'DYNAMO_DB_CONNECTION';

const dynamoProvider = {
  provide: DYNAMO_DB_CONNECTION,
  useFactory: () => {
    const dbClient = new DynamoDB({
      endpoint: 'http://localhost:8000',
    });
    const docClient = new DocumentClient({
      endpoint: 'http://localhost:8000',
    });
  },
};

@Module({
  exports: [DYNAMO_DB_CONNECTION],
  providers: [dynamoProvider],
})
export class DynamoModule {}
