export class MessageDto {
  readonly dateTime: Date | undefined;
  readonly qoute: string | undefined;
  readonly message: string | undefined;
  readonly imageBase64: string | undefined;
  readonly showName: boolean | undefined;
}
