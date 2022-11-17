export enum Gender {
  male = 'male',
  female = 'female',
}

export class Person {
  id: string | undefined;
  name: string | undefined;
  birthday: Date | undefined;
  gender: Gender | undefined;
  image: string | undefined;
}
