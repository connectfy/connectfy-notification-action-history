import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MailerModule } from '@nestjs-modules/mailer';
import { ENVIRONMENT_VARIABLES } from './common/constants/environment-variables';
import { ModulesModule } from './modules/modules.module';

@Module({
  imports: [
    MongooseModule.forRoot(ENVIRONMENT_VARIABLES.MONGO_URI, {
      dbName: ENVIRONMENT_VARIABLES.DB_NAME,
    }),
    MailerModule.forRoot({
      transport: {
        host: ENVIRONMENT_VARIABLES.EMAIL_HOST,
        secure: ENVIRONMENT_VARIABLES.NODE_ENV === 'production',
        auth: {
          user: ENVIRONMENT_VARIABLES.EMAIL_USER,
          pass: ENVIRONMENT_VARIABLES.EMAIL_PASS,
        },
      },
    }),

    // src/modules
    ModulesModule,
  ],
})
export class AppModule {}
