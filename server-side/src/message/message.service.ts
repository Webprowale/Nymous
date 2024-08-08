import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { mesgType } from './mesgtype';


@Injectable()
export class MessageService {
  constructor(private prisma: PrismaService) {}

  async getMessage() {
    return await this.prisma.message.findMany();
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
