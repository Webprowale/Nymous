import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, UserDto } from './user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @UsePipes( new ValidationPipe)
  registerUser(@Body() user:UserDto){
    return this.authService.register(user)
  }

  @Post('/login')
  @UsePipes(new ValidationPipe)
  loginUser(@Body() log:LoginDto){
    return this.authService.login(log)
  }
}
