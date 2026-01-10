import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EmailModule } from './modules/email/email.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { ENV } from './common/constants/constants';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get<string>(ENV.CORE.DATABASE.MONGO.URI),
        dbName: config.get<string>(ENV.CORE.DATABASE.MONGO.DB_NAME),
      }),
    }),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        transport: {
          host: config.get<string>(ENV.NOTIFICATION.EMAIL.HOST),
          secure: config.get<string>(ENV.CORE.APP.NODE_ENV) === 'production',
          auth: {
            user: config.get<string>(ENV.NOTIFICATION.EMAIL.USER),
            pass: config.get<string>(ENV.NOTIFICATION.EMAIL.PASS),
          },
        },
      }),
    }),
    EmailModule,
  ],
})
export class AppModule {}
