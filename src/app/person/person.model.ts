export enum Gender {
  male = 'Man',
  female = 'Vrouw',
}

export class Person {
  id: string | undefined;
  name: string | undefined;
  birthday: Date | undefined;
  deathday: Date | undefined;
  gender: Gender | undefined;
  image: string | undefined;
}
