import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { mesgType } from './mesgtype';


@Injectable()
export class MessageService {
  constructor(private readonly prisma: PrismaService) {}

  async getMessage(id:number) {
    const user = await this.prisma.message.findMany({
      orderBy:{
        id:'desc'
      },
      where:{
        userId:id 
      }
    });
    if(!user){
      return {}
    }

      return{
        user
      }
  }

  async createMessage(message:mesgType) {
    const userExist = await this.prisma.auth.findUnique({
      where: {
        username: message.username,
      },
      include: {
        message: true,
      },
    });

    if (!userExist) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }

    await this.prisma.message.create({
      data: {
        userId: userExist.id,
        content: message.content,
      },
    });

    return { message: 'Message sent successfully' };
  }
}
