
import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { PrismaModule } from '../prisma/prisma.module';  
import { JwtAuthGuard } from 'src/auth/jwt-guard';
import { JwtStrategy } from 'src/auth/jwt.strategy';

@Module({
  imports: [PrismaModule],  // Importing PrismaModule to interact with Prisma database.
  controllers: [MessageController],
  providers: [MessageService,JwtAuthGuard,JwtStrategy],
})
export class MessageModule {}
