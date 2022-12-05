import { Injectable, Logger, NotAcceptableException } from '@nestjs/common';
import { UsersService } from '../user/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.model';
import { UserLoginDto } from '../user/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(userLoginDto: UserLoginDto): Promise<User | null> {
    Logger.log('[AuthService] validateUser called');
    Logger.log(userLoginDto);

    const user: User | null = await this.userService.getUserByEmail(
      userLoginDto.email!
    );
    if (!user) {
      Logger.log(
        '[AuthService] No user found with email: {' + userLoginDto.email + '}'
      );
      return null;
    }

    const passwordValid = await bcrypt.compare(
      userLoginDto.password!,
      user.passwordHash!
    );
    if (passwordValid) {
      Logger.log(
        '[AuthService] Invalid password for user with email: {' +
          userLoginDto.email +
          '}'
      );
      return user;
    }

    return null;
  }

  async login(user: User) {
    Logger.log('[AuthService] login called');
    Logger.log(user);

    const payload = {
      email: user.email,
      sub: user.id,
    };

    return {
      acces_token: this.jwtService.sign(payload),
    };
  }
}
