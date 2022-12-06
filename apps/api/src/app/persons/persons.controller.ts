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
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PersonDto } from './person.dto';
import { PersonsService } from './persons.service';
import { IGetUserAuthInfoReqeust } from '../shared/auth.inforequest.interface';
import { Person } from './person.model';

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
    Logger.log('[PersonsController][POST]/persons called');
    Logger.log(personDto);

    const userId = req.user._id;

    const person: Person = await this.personsService.addPerson(
      personDto,
      userId
    );
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
