import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { v4 } from 'uuid';

export class CreateEventDto {
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    type: 'string',
    example: 'PersonCreated',
  })
  readonly type: string;

  @IsNotEmpty()
  @ApiProperty({
    required: true,
    type: 'string',
    example: v4(),
  })
  readonly personId: string;
}
