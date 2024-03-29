import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { PersonDto } from './person.dto';
import { Person, PersonDocument } from './person.model';

@Injectable()
export class PersonsService {
  constructor(
    @InjectModel('person') private readonly personModel: Model<PersonDocument>
  ) {}

  async addPerson(personDto: PersonDto, userId: string): Promise<Person> {
    Logger.log(
      '[PersonsService] addPerson called with userId: {' + userId + '}'
    );
    Logger.log(personDto);

    const person = {
      userId,
      ...personDto,
    };

    return await this.personModel.create(person);
  }

  async getAllPersonsFromUser(userId: string): Promise<Person[]> {
    Logger.log('[PersonsService] getAllPersonsFromUser(' + userId + ') called');

    return await this.personModel.find({ userId: { $eq: userId } });
  }

  async getPersonById(_id: string): Promise<Person | null> {
    Logger.log('[PersonsService] getPersonById(' + _id + ') called');

    return await this.personModel.findById({ _id: new Types.ObjectId(_id) });
  }

  async updatePerson(
    _id: string,
    userId: string,
    personDto: PersonDto
  ): Promise<Person | null> {
    Logger.log(
      '[PersonsService] updatePerson(' +
        _id +
        ') called with userId: {' +
        userId +
        '}'
    );
    Logger.log(personDto);

    const person = {
      _id,
      userId,
      ...personDto,
    };

    return await this.personModel.findOneAndUpdate({ _id: _id }, person, {
      new: true,
    });
  }

  async removePersonById(_id: string): Promise<Person | null> {
    Logger.log('[PersonsService] removePersonById(' + _id + ') called');

    return await this.personModel.findOneAndDelete({ _id: _id });
  }
}
