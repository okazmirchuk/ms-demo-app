import { IsEnum, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { LanguageEnum } from '../entities/person.entity';

export class CreatePersonDto {
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    type: 'string',
    example: 'Alex',
  })
  readonly name: string;

  @IsNotEmpty()
  @ApiProperty({
    required: true,
    type: 'string',
    example: new Date(),
  })
  readonly birthdate: string;

  @IsNotEmpty()
  @ApiProperty({
    required: true,
    type: 'string',
    example: 'Ukraine',
  })
  readonly birthCountry: string;

  @IsNotEmpty()
  @ApiProperty({
    required: true,
    type: 'string',
    example: 'en',
  })
  @IsEnum(LanguageEnum)
  readonly language: LanguageEnum;

  @IsNotEmpty()
  @ApiProperty({
    required: true,
    type: 'string',
    example: '+38096822323',
  })
  readonly telephone: string;
}
