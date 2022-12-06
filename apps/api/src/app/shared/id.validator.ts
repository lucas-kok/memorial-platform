import { isValidObjectId } from 'mongoose';

export class IdValidator {
  public static validate(id: string): boolean {
    return isValidObjectId(id);
  }
}
