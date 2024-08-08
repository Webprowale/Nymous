import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { MessageService } from './message.service';
import { msgDto } from './msg.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

@Get()
@UseGuards(AuthGuard)
getMessage(){
  return this.messageService.getMessage();
}

@Post()
@UsePipes(new ValidationPipe)
createMessage(@Body() message:msgDto){
  return this.messageService.createMessage(message);
}
}