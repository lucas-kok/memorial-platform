import { Gender } from '../app/shared/gender.model';

export class Person {
  _id: string | undefined;
  name: string | undefined;
  birthday: Date | undefined;
  deathday: Date | undefined;
  gender: Gender | undefined;
  imageBase64: string | undefined;
}
