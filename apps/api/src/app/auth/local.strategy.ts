import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserLoginDto } from '../user/user.dto';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(userLoginDto: UserLoginDto): Promise<any> {
    const user = this.authService.validateUser(userLoginDto);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
