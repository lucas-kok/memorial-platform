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
  Req,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PersonDto } from './person.dto';
import { PersonsService } from './persons.service';
import { IGetUserAuthInfoReqeust } from '../shared/auth.inforequest.interface';
import { Person } from './person.model';
import { IdValidator } from '../shared/id.validator';

@Controller('persons')
export class PersonsController {
  constructor(private personsService: PersonsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async addPerson(
    @Body() personDto: PersonDto,
    @Req() req: IGetUserAuthInfoReqeust,
    @Res() res: Response
  ) {
    const userId = req.user._id;
    Logger.log(
      '[PersonsController][POST]/persons called for userId: {' + userId + '}'
    );
    Logger.log(personDto);

    const person: Person = await this.personsService.addPerson(
      personDto,
      userId
    );

    return res.status(201).json({
      status: 200,
      result: person,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllPersonsFromUser(
    @Req() req: IGetUserAuthInfoReqeust,
    @Res() res: Response
  ) {
    const userId = req.user._id;
    Logger.log(
      '[PersonsController][GET]/persons called for userId: {' + userId + '}'
    );

    const persons: Person[] = await this.personsService.getAllPersonsFromUser(
      userId
    );

    return res.status(200).json({
      status: 200,
      result: persons,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getPersonById(@Param('id') id: string, @Res() res: Response) {
    Logger.log('[PersonsController][GET]/persons/' + id + ' called');

    const person = await this.personsService.getPersonById(id);

    if (!IdValidator.validate(id)) {
      return res.status(400).json({
        status: 400,
        error: 'Id must be a string of 12 bytes',
      });
    }

    if (person == null) {
      return res.status(404).json({
        status: 404,
        error: 'Person with id: {' + id + '} not found',
      });
    }

    return res.status(200).json({
      status: 200,
      result: person,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updatePerson(
    @Param('id') id: string,
    @Body() personDto: PersonDto,
    @Req() req: IGetUserAuthInfoReqeust,
    @Res() res: Response
  ) {
    Logger.log('[PersonsController][PUT]/persons/' + id + ' called');

    if (!IdValidator.validate(id)) {
      return res.status(400).json({
        status: 400,
        error: 'Id must be a string of 12 bytes',
      });
    }

    const findPerson = await this.personsService.getPersonById(id);
    if (findPerson == null) {
      return res.status(404).json({
        status: 404,
        error: 'Person with id: {' + id + '} not found',
      });
    }

    const requestId = req.user._id;
    if (requestId != findPerson.userId) {
      return res.status(403).json({
        status: 403,
        error: "You don't have permission to update this person",
      });
    }

    const person = await this.personsService.updatePerson(
      id,
      requestId,
      personDto
    );
    return res.status(201).json({
      status: 201,
      result: person,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async removePerson(
    @Param('id') id: string,
    @Req() req: IGetUserAuthInfoReqeust,
    @Res() res: Response
  ) {
    Logger.log('[PersonsController][DELETE]/persons/' + id + ' called');

    const findPerson = await this.personsService.getPersonById(id);
    if (!findPerson) {
      return res.status(404).json({
        status: 404,
        error: 'Person with id: {' + id + '} not found',
      });
    }

    const requestId = req.user._id;
    if (requestId != findPerson.userId) {
      return res.status(403).json({
        status: 403,
        error: "You don't have permission to delete this person",
      });
    }

    await this.personsService.removePersonById(id);
    return res.status(200).json({
      status: 200,
      message: 'Person with id: {' + id + ' deleted',
    });
  }
}
