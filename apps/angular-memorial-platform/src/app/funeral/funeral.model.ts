import { Person } from '../person/person.model';

export class Funeral {
  _id: string | undefined;
  userId: string | undefined;
  person: Person | undefined;
  dateTime: Date | undefined;
  adress: string | undefined;
  postalCode: string | undefined;
  city: string | undefined;
  description: string | undefined;
  isPrivate: boolean | undefined;
}

export class FuneralDto {
  userId: string | undefined;
  personId: string | undefined;
  dateTime: Date | undefined;
  adress: string | undefined;
  postalCode: string | undefined;
  city: string | undefined;
  description: string | undefined;
  isPrivate: boolean | undefined;
}
