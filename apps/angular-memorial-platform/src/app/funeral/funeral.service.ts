import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { prodEnvironment } from '../../environments/environment.prod';
import { Funeral, FuneralDto } from './funeral.model';

@Injectable({
  providedIn: 'root',
})
export class FuneralService {
  apiUri: string | undefined;

  constructor(private http: HttpClient) {
    this.apiUri = isDevMode() ? environment.API_URL : prodEnvironment.API_URL;
  }

  addFuneral(funeral: FuneralDto, jwtToken: string): Observable<FuneralDto> {
    return this.http.post<FuneralDto>(this.apiUri + '/funerals', funeral, {
      headers: { Authorization: `Bearer ${jwtToken}` },
    });
  }

  getAllFunerals(): Observable<Funeral[]> {
    return this.http.get<Funeral[]>(this.apiUri! + '/funerals');
  }

  getFuneralById(id: string): Observable<Funeral> {
    return this.http.get<Funeral>(this.apiUri + '/funerals/' + id);
  }

  getFuneralByPersonId(personId: string): Observable<Funeral> {
    return this.http.get<Funeral>(this.apiUri + '/funerals/person/' + personId);
  }
}
