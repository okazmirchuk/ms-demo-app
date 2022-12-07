import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { v4 } from 'uuid';

export class CreateDocumentDto {
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    type: 'string',
    example: 'Some document title',
  })
  readonly title: string;

  @IsNotEmpty()
  @ApiProperty({
    required: true,
    type: 'string',
    example: v4(),
  })
  readonly personId: string;

  @IsNotEmpty()
  @ApiProperty({
    required: true,
    type: 'string',
    example: 'en',
  })
  readonly language: string;
}
