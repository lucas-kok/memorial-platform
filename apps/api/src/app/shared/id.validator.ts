export class IdValidator {
  public static validate(id: string): boolean {
    return id.length == 12;
  }
}
