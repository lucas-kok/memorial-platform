import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { User } from './user.model';
import { UsersService } from './users.service';
import { Response } from 'express';
import { UserDto } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  addUser(@Body() userDto: UserDto, @Res() res: Response) {
    Logger.log('[POST]/users called');
    Logger.log(userDto);

    let user = this.usersService.addUser(userDto);
    res.status(201).json({
      status: 201,
      result: user,
    });
  }

  @Get()
  getAllUsers(@Res() res: Response) {
    Logger.log('[GET]/users called');
    let users = this.usersService.getAllUsers();

    res.status(200).json({
      status: 200,
      result: users,
    });
  }

  @Get(':id')
  getUserById(@Param('id') id: string, @Res() res: Response) {
    Logger.log('[GET]/users/' + id + ' called');
    let user: User | null = this.usersService.getUserById(id);

    if (user == null) {
      res.status(404).json({
        status: 404,
        error: 'User with id {' + id + '} not found',
      });
    }

    res.status(200).json({
      status: 200,
      result: user,
    });
  }

  @Put(':id')
  updateUser(
    @Param('id') id: string,
    @Body() userDto: UserDto,
    @Res() res: Response
  ) {
    Logger.log('[PUT]/users/' + id + ' called');
    Logger.log(userDto);

    let user = this.usersService.updateUser(id, userDto);
    res.status(201).json({
      status: 201,
      result: user,
    });
  }

  @Delete(':id')
  removeUser(@Param('id') id: string, @Res() res: Response) {
    Logger.log('[DELETE]/users/' + id + ' called');
    let user: User | null = this.usersService.getUserById(id);

    if (user == null) {
      res.status(404).json({
        status: 404,
        error: 'User with id {' + id + '} not found',
      });
    }

    this.usersService.removeUserById(id);

    res.status(200).json({
      status: 200,
      message: 'User with id {' + id + '} deleted',
    });

    return 'removeUser called';
  }
}
