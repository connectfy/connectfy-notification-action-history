import * as dotenv from 'dotenv';
import * as path from 'path';

const appEnv = process.env.APP_ENV || 'remote';

const envPath = path.resolve(process.cwd(), `.env.${appEnv}`);

dotenv.config({ path: envPath });

export const ENVIRONMENT_VARIABLES = {
  // Core
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  HOST: process.env.HOST,

  // Database
  DB_NAME: process.env.DB_NAME,
  MONGO_URI: process.env.MONGO_URI || '',

  // Kafka
  SERVICE_NAME: process.env.SERVICE_NAME,
  BROKER1: process.env.BROKER1 || '',
  BROKER2: process.env.BROKER2 || '',

  EMAIL_HOST: process.env.EMAIL_HOST,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,

  // TCP
  AUTH_SERVICE_HOST: process.env.AUTH_SERVICE_HOST,
  AUTH_SERVICE_PORT: Number(process.env.AUTH_SERVICE_PORT),

  ACCOUNT_SERVICE_HOST: process.env.ACCOUNT_SERVICE_HOST,
  ACCOUNT_SERVICE_PORT: Number(process.env.ACCOUNT_SERVICE_PORT),

  MESSENGER_SERVICE_HOST: process.env.MESSENGER_SERVICE_HOST,
  MESSENGER_SERVICE_PORT: Number(process.env.MESSENGER_SERVICE_PORT),

  RELATIONSHIP_SERVICE_HOST: process.env.RELATIONSHIP_SERVICE_HOST,
  RELATIONSHIP_SERVICE_PORT: Number(process.env.RELATIONSHIP_SERVICE_PORT),
};
