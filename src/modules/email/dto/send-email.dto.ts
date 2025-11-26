import { Transform } from 'class-transformer';
import { ValidationMessages } from '@common/constants/validation.messages';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { stringTransform } from '@/src/common/functions/transform';

export class SendMailDto {
  @Transform(({ key, value }) => stringTransform({ key, value }))
  @IsString({ message: ValidationMessages.STRING('from') })
  @IsNotEmpty({ message: ValidationMessages.REQUIRED('from') })
  from: string;

  @Transform(({ key, value }) => stringTransform({ key, value }))
  @IsEmail({}, { message: ValidationMessages.EMAIL('to') })
  @IsNotEmpty({ message: ValidationMessages.REQUIRED('to') })
  to: string;

  @Transform(({ key, value }) => stringTransform({ key, value }))
  @IsString({ message: ValidationMessages.STRING('sender') })
  @IsNotEmpty({ message: ValidationMessages.REQUIRED('sender') })
  sender: string;

  @Transform(({ key, value }) => stringTransform({ key, value }))
  @IsString({ message: ValidationMessages.STRING('subject') })
  @IsNotEmpty({ message: ValidationMessages.REQUIRED('subject') })
  subject: string;

  @Transform(({ key, value }) => stringTransform({ key, value }))
  @IsString({ message: ValidationMessages.STRING('html') })
  @IsNotEmpty({ message: ValidationMessages.REQUIRED('html') })
  html: string;
}
