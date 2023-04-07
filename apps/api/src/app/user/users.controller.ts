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
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express';
import { UserDto } from './user.dto';
import * as bcrypt from 'bcrypt';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { IGetUserAuthInfoReqeust } from '../shared/auth.inforequest.interface';
import { IdValidator } from '../shared/id.validator';

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

    userDto.password = await this.hashPassword(userDto.password!);

    const user = await this.usersService.addUser(userDto);
    return res.status(201).json({
      status: 201,
      result: user,
    });
  }

  @Get()
  async getAllUsers(@Res() res: Response) {
    Logger.log('[UsersController][GET]/users called');

    const users = await this.usersService.getAllUsers();
    return res.status(200).json({
      status: 200,
      result: users,
    });
  }

  @Get(':id')
  async getUserById(@Param('id') id: string, @Res() res: Response) {
    Logger.log('[UsersController][GET]/users/' + id + ' called');

    if (!IdValidator.validate(id)) {
      return res.status(400).json({
        status: 400,
        error: 'Id is not in a valid string format',
      });
    }

    const user = await this.usersService.getUserById(id);

    if (!user) {
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
    @Req() req: IGetUserAuthInfoReqeust,
    @Res() res: Response
  ) {
    Logger.log('[UsersController][PUT]/users/' + id + ' called');
    Logger.log(userDto);

    if (!IdValidator.validate(id)) {
      return res.status(400).json({
        status: 400,
        error: 'Id is not in a valid string format',
      });
    }

    const requestId = req.user._id;
    Logger.log(requestId);
    if (requestId != id) {
      return res.status(403).json({
        status: 403,
        error: "You don't have permission to update this user",
      });
    }

    if (req.user.email != userDto.email) {
      const findUser = await this.usersService.getUserByEmail(userDto.email!);
      if (findUser) {
        return res.status(403).json({
          status: 403,
          error: 'The given email is already in use',
        });
      }
    }

    userDto.password = await this.hashPassword(userDto.password!);

    const user = await this.usersService.updateUser(id, userDto);
    return res.status(201).json({
      status: 201,
      result: user,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async removeUser(
    @Param('id') id: string,
    @Req() req: IGetUserAuthInfoReqeust,
    @Res() res: Response
  ) {
    Logger.log('[UsersController][DELETE]/users/' + id + ' called');

    if (!IdValidator.validate(id)) {
      return res.status(400).json({
        status: 400,
        error: 'Id is not in a valid string format',
      });
    }

    const requestId = req.user._id;
    if (requestId != id) {
      return res.status(403).json({
        status: 403,
        error: "You don't have permission to delete this user",
      });
    }

    const user = await this.usersService.getUserById(id);

    if (!user) {
      return res.status(404).json({
        status: 404,
        error: 'User with id {' + id + '} not found',
      });
    }

    await this.usersService.removeUserById(id);
    return res.status(200).json({
      status: 200,
      message: 'User with id {' + id + '} deleted',
    });
  }

  async hashPassword(password: string): Promise<string> {
    Logger.log('[UsersController] hashPassword(' + password + ') called');

    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);
  }
}
