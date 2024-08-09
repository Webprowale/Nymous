import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MessageModule } from './message/message.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './Prisma/prisma.module';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),AuthModule, MessageModule, PrismaModule]
})
export class AppModule {}
