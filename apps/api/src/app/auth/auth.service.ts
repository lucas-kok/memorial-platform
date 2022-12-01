import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UsersService } from '../user/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user: User = await this.userService.getUserByEmail(email);
    if (!user) {
      throw new NotAcceptableException('could not find the user');
    }

    const passwordValid = await bcrypt.compare(password, user.passwordHash!);
    if (passwordValid) {
      return user;
    }
  }

  async login(user: User) {
    const payload = {
      email: user.email,
      sub: user.id,
    };

    return {
      acces_token: this.jwtService.sign(payload),
    };
  }
}
