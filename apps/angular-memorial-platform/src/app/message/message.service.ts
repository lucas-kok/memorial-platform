import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { environment } from '../../environments/environment';
import { prodEnvironment } from '../../environments/environment.prod';
import { Message } from './message.model';
import { MessageDTO } from './message.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  apiUri: string | undefined;

  constructor(private http: HttpClient) {
    this.apiUri = isDevMode() ? environment.API_URL : prodEnvironment.API_URL;
  }

  addMessage(
    message: Message,
    memorialId: string,
    jwtToken: string
  ): Observable<Message> {
    const messageDTO: MessageDTO = {
      memorialId: message.memorialId,
      message: message.message,
      qoute: message.qoute,
      dateTime: new Date(),
      imageBase64: btoa('base64'),
      showName: true,
    };

    return this.http.post<Message>(`${this.apiUri}/messages`, messageDTO, {
      headers: { Authorization: `Bearer ${jwtToken}` },
    });
  }

  deleteMessage(messageId: string, memorialId: string, jtwToken: string) {
    const dto = {
      memorialId: memorialId,
      _id: messageId,
    };

    return this.http.delete(`${this.apiUri}/messages`, {
      headers: { Authorization: `Bearer ${jtwToken}` },
      body: dto,
    });
  }
}
