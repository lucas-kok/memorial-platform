import { Injectable, isDevMode } from '@angular/core';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { Memorial } from './memorial.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { prodEnvironment } from '../../environments/environment.prod';
import { MemorialDTO } from './memorial.dto';

@Injectable({
  providedIn: 'root',
})
export class MemorialService {
  apiUri: string | undefined;

  constructor(private http: HttpClient) {
    this.apiUri = isDevMode() ? environment.API_URL : prodEnvironment.API_URL;
  }

  getMemorialByFuneralId(funeralId: string): Observable<Memorial> {
    return this.http.get<Memorial>(
      `${this.apiUri}/memorials/funeral/${funeralId}`
    );
  }

  createMemorial(memorial: Memorial, jwtToken: string): Observable<Memorial> {
    const memorialDTO: MemorialDTO = {
      funeralId: memorial.funeralId,
      description: memorial.description,
      imageBase64: memorial.imageBase64,
    };

    return this.http.post<Memorial>(`${this.apiUri}/memorials`, memorialDTO, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }

  getRelatedMemorials(
    memorialId: string,
    jwtToken: string
  ): Observable<Memorial[]> {
    return this.http
      .get<string[]>(`${this.apiUri}/memorials/${memorialId}/recommendations`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .pipe(
        map((response: any) => response.result),
        switchMap((memorialIds: string[]) => {
          const memorialObservables = memorialIds.map((id) =>
            this.getMemorialById(id, jwtToken)
          );
          return forkJoin(memorialObservables);
        })
      );
  }

  getMemorialById(memorialId: string, jwtToken: string): Observable<Memorial> {
    return this.http.get<Memorial>(`${this.apiUri}/memorials/${memorialId}`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
}
