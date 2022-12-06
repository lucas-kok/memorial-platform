import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
  Req,
} from '@nestjs/common';
import { User } from './user.model';
import { UsersService } from './users.service';
import { Response, Request } from 'express';
import { UserDto } from './user.dto';
import * as bcrypt from 'bcrypt';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async addUser(@Body() userDto: UserDto, @Res() res: Response) {
    Logger.log('[UsersController][POST]/users called');
    Logger.log(userDto);

    const findUser = await this.usersService.getUserByEmail(userDto.email!);
    if (findUser) {
      return res.status(403).json({
        status: 403,
        error: 'The given email is already in use',
      });
    }

    const saltOrRounds = 10;
    userDto.password = await bcrypt.hash(userDto.password!, saltOrRounds);

    const user: User = await this.usersService.addUser(userDto);
    return res.status(201).json({
      status: 201,
      result: user,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllUsers(@Res() res: Response) {
    Logger.log('[UsersController][GET]/users called');
    const users: User[] = await this.usersService.getAllUsers();

    return res.status(200).json({
      status: 200,
      result: users,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getUserById(@Param('id') id: string, @Res() res: Response) {
    Logger.log('[UsersController][GET]/users/' + id + ' called');
    const user: User | null = await this.usersService.getUserById(id);

    if (user == null) {
      return res.status(404).json({
        status: 404,
        error: 'User with id {' + id + '} not found',
      });
    }

    return res.status(200).json({
      status: 200,
      result: user,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() userDto: UserDto,
    @Req() req: Request,
    @Res() res: Response
  ) {
    Logger.log('[UsersController][PUT]/users/' + id + ' called');
    Logger.log(userDto);

    let user = await this.usersService.updateUser(id, userDto);
    return res.status(201).json({
      status: 201,
      result: user,
    });
  }

  // @Delete(':id')
  // async removeUser(@Param('id') id: string, @Res() res: Response) {
  //   Logger.log('[UsersController][DELETE]/users/' + id + ' called');
  //   const user: User | null = this.usersService.getUserById(id);

  //   if (user == null) {
  //     return res.status(404).json({
  //       status: 404,
  //       error: 'User with id {' + id + '} not found',
  //     });
  //   }

  //   this.usersService.removeUserById(id);

  //   return res.status(200).json({
  //     status: 200,
  //     message: 'User with id {' + id + '} deleted',
  //   });
  // }
}
