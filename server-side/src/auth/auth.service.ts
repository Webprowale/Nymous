import { Injectable, HttpException,HttpStatus } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/Prisma/prisma.service';
import * as argon2 from "argon2";
import { JwtService } from '@nestjs/jwt';
import { logintype } from './user.dto';


@Injectable()
export class AuthService {
    constructor(private prisma:PrismaService, private jwtService:JwtService){}

    async register(user:Prisma.AuthCreateInput){
      const userExist = await this.prisma.auth.findUnique({
        where:{
            email:user.email,
            username:user.username
        }
      })
      if(userExist) throw new HttpException('username and email must be unique', HttpStatus.BAD_REQUEST)
        const hashPass = await argon2.hash(user.password);
           const createUser = await this.prisma.auth.create({
             data:{
              email:user.email,
              username:user.username,
              password: hashPass
             }
          })
          return {
            message: 'Registration successfuly!',
            data:createUser
          }
    }
   async login(log:logintype){
      const userExist = await this.prisma.auth.findUnique({
        where:{
          username: log.username
        },
      })
      if(!userExist) throw new HttpException('username name does not exist', HttpStatus.BAD_REQUEST)

        const verifyPass = await argon2.verify(userExist.password, log.password);
        if(!verifyPass) throw new HttpException('Incorrect password', HttpStatus.BAD_REQUEST)
        const payload ={
           username:userExist.username,
           sub: userExist.id
        }
          return{
            message: 'Login successfuly!',
            data: {
              accessToken: this.jwtService.sign(payload),
              username: userExist.username,
              email: userExist.email,
            }
          }
    }
}
