export class IdValidator {
  validate(id: string): boolean {
    return id.length == 12;
  }
}
