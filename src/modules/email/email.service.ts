import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { SendMailDto } from './dto/send-email.dto';

@Injectable()
export class EmailService {
  constructor(private readonly mailService: MailerService) {}

  async sendMail(data: SendMailDto): Promise<void> {
    const { from, sender, to, subject, html } = data;

    await this.mailService.sendMail({ from, sender, to, subject, html });
  }
}
