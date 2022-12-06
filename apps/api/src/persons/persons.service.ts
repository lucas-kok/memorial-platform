import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class PersonsService {
  addPerson() {
    Logger.log('[PersonsService] addPerson called');
  }

  getAllPersons() {
    Logger.log('[PersonsService] getAllPersons called');
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
