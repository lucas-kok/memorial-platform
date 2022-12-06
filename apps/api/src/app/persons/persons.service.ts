import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PersonDto } from './person.dto';
import { Person, PersonDocument } from './person.model';

@Injectable()
export class PersonsService {
  constructor(
    @InjectModel('person') private readonly personModel: Model<PersonDocument>
  ) {}

  addPerson(personDto: PersonDto, userId: string): Promise<Person> {
    Logger.log(
      '[PersonsService] addPerson called with userId: {' + userId + '}'
    );
    Logger.log(personDto);

    const person = {
      userId: userId,
      ...personDto,
    };

    return this.personModel.create(person);
  }

  async getAllPersonsFromUser(userId: string): Promise<Person[]> {
    Logger.log('[PersonsService] getAllPersons(' + userId + ') called');

    return await this.personModel.find({ userId: userId });
  }

  getPersonById(_id: string) {
    Logger.log('[PersonsService] getPersonById(' + _id + ') called');
  }

  updatePerson(_id: string) {
    Logger.log('[PersonsService] updatePerson(' + _id + ') called');
  }

  removePersonById(_id: string) {
    Logger.log('[PersonsService] removePersonById(' + _id + ') called');
  }
}
