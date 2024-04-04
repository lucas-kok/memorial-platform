import { Injectable, isDevMode } from '@angular/core';
import { environment } from '../../environments/environment';
import { prodEnvironment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FuneralDTO } from './funeral.dto';
import { Funeral } from './funeral.model';

@Injectable({
  providedIn: 'root',
})
export class FuneralService {
  apiUri: string | undefined;

  constructor(private http: HttpClient) {
    this.apiUri = isDevMode() ? environment.API_URL : prodEnvironment.API_URL;
  }

  getFunerals(jwtToken: string): Observable<Funeral[]> {
    return this.http.get<Funeral[]>(this.apiUri + '/funerals', {
      headers: { Authorization: `Bearer ${jwtToken}` },
    });
  }

  getFuneralById(id: string, jwtToken: string): Observable<Funeral> {
    return this.http.get<Funeral>(this.apiUri + '/funerals/' + id, {
      headers: { Authorization: `Bearer ${jwtToken}` },
    });
  }

  addFuneral(funeral: Funeral, jwtToken: string): Observable<Funeral> {
    const funeralDTO: FuneralDTO = {
      personId: funeral.person?._id,
      dateTime: funeral.dateTime
        ? this.toISODate(new Date(funeral.dateTime))
        : this.toISODate(new Date()),
      adress: funeral.adress,
      postalCode: funeral.postalCode,
      city: funeral.city,
      description: funeral.description,
      isPrivate: funeral.isPrivate,
    };

    return this.http.post<Funeral>(this.apiUri + '/funerals', funeralDTO, {
      headers: { Authorization: `Bearer ${jwtToken}` },
    });
  }

  updateFuneral(funeral: Funeral, jwtToken: string): Observable<Funeral> {
    const funeralDTO: FuneralDTO = {
      personId: funeral.person?._id,
      dateTime: funeral.dateTime
        ? this.toISODate(new Date(funeral.dateTime))
        : this.toISODate(new Date()),
      adress: funeral.adress,
      postalCode: funeral.postalCode,
      city: funeral.city,
      description: funeral.description,
      isPrivate: funeral.isPrivate,
    };

    return this.http.put<Funeral>(
      this.apiUri + '/funerals/' + funeral._id,
      funeralDTO,
      {
        headers: { Authorization: `Bearer ${jwtToken}` },
      }
    );
  }

  deleteFuneral(id: string, jwtToken: string): Observable<Funeral> {
    return this.http.delete<Funeral>(this.apiUri + '/funerals/' + id, {
      headers: { Authorization: `Bearer ${jwtToken}` },
    });
  }

  toISODate(date: Date): string {
    return date.toISOString();
  }
}
