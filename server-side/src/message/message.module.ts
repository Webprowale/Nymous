
import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { PrismaModule } from '../prisma/prisma.module';  
import { AuthModule } from '../auth/auth.module'; 

@Module({
  controllers: [MessageController],
  imports: [PrismaModule, AuthModule],
  providers: [MessageService],
})
export class MessageModule {}
