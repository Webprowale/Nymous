import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { MessageService } from './message.service';
import { msgDto } from './msg.dto';
import { JwtAuthGuard } from 'src/auth/jwt-guard';


@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

@Get(':id')
@UseGuards(JwtAuthGuard)
getMessage(id:number){
  return this.messageService.getMessage(id);
}

@Post()
@UsePipes(new ValidationPipe)
createMessage(@Body() message:msgDto){
  return this.messageService.createMessage(message);
}
}