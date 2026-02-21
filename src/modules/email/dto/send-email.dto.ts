import { FieldValidator, FIELD_TYPE } from 'connectfy-shared';

export class SendMailDto {
  @FieldValidator({ type: FIELD_TYPE.STRING })
  from: string;

  @FieldValidator({ type: FIELD_TYPE.EMAIL })
  to: string;

  @FieldValidator({ type: FIELD_TYPE.STRING })
  sender: string;

  @FieldValidator({ type: FIELD_TYPE.STRING })
  subject: string;

  @FieldValidator({ type: FIELD_TYPE.STRING })
  html: string;
}
