import {
  Controller,
  Post,
  UseGuards,
  Res,
  Body,
  Get,
  Req,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { UserLoginDto } from '../user/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(@Body() userLoginDto: UserLoginDto, @Res() res: Response) {
    const user = await this.authService.validateUser(userLoginDto);
    if (user == null) {
      return res.status(404).json({
        status: 404,
        error: 'Invalid login attempt',
      });
    }

    const result = await this.authService.login(user);
    return res.status(200).json({
      status: 200,
      result: {
        jwtToken: result,
        userId: user._id,
        email: user.email,
      },
    });
  }
}
