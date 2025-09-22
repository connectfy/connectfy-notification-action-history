import { Transform } from 'class-transformer';
import { ValidationMessages } from '@common/constants/validation.messages';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SendMailDto {
  @IsString({ message: ValidationMessages.STRING('from') })
  @Transform(({ value }) => value?.trim())
  @IsNotEmpty({ message: ValidationMessages.REQUIRED('from') })
  from: string;

  @IsEmail({}, { message: ValidationMessages.EMAIL('to') })
  @Transform(({ value }) => value?.trim())
  @IsNotEmpty({ message: ValidationMessages.REQUIRED('to') })
  to: string;

  @IsString({ message: ValidationMessages.STRING('sender') })
  @Transform(({ value }) => value?.trim())
  @IsNotEmpty({ message: ValidationMessages.REQUIRED('sender') })
  sender: string;

  @IsString({ message: ValidationMessages.STRING('subject') })
  @Transform(({ value }) => value?.trim())
  @IsNotEmpty({ message: ValidationMessages.REQUIRED('subject') })
  subject: string;

  @IsString({ message: ValidationMessages.STRING('html') })
  @IsNotEmpty({ message: ValidationMessages.REQUIRED('html') })
  html: string;
}
