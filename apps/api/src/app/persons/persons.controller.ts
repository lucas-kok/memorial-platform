import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PersonDto } from './person.dto';
import { PersonsService } from './persons.service';

@Controller('persons')
export class PersonsController {
  constructor(private personsService: PersonsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  addPerson(@Body() personDto: PersonDto, @Res() res: Response) {
    Logger.log('[PersonsController][POST]/persons called');
    Logger.log(personDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getAllPersonsFromUser(@Res() res: Response) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getPersonById(
    @Param(':id') id: string,
    @Body() personDto: PersonDto,
    @Res() res: Response
  ) {
    Logger.log('[PersonsController][GET]/persons/' + id + ' called');
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updatePerson(@Param('id') id: string, @Res() res: Response) {
    Logger.log('[PersonsController][PUT]/persons/' + id + ' called');
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  removePerson(@Param('id') id: string, @Res() res: Response) {
    Logger.log('[PersonsController][DELETE]/persons/' + id + ' called');
  }
}
