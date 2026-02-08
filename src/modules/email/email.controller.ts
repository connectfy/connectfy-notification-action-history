import { Controller } from '@nestjs/common';
import { EmailService } from './email.service';
import { EventPattern, Payload, Transport } from '@nestjs/microservices';
import { SendMailDto } from './dto/send-email.dto';

@Controller('email')
export class EmailController {
  constructor(private readonly service: EmailService) {}

  @EventPattern('mail.send', Transport.KAFKA)
  async sendMail(@Payload() data: SendMailDto) {
    await this.service.sendMail(data);
  }
}
