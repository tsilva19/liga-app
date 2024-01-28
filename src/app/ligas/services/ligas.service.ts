import { Liga } from './../model/liga';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LigasService {

  // private readonly API = '/assets/ligas.json';

  // private readonly API = '/api/ligas';

  private readonly API = '/api/ligas';
  constructor(private httpClient: HttpClient) { }

  lista() {
   return this.httpClient.get<Liga[]>(this.API)
    .pipe(
      first(),
      delay(1000),
      tap(ligas => console.log(ligas))
    );
  }

  save(registro: Liga){
    //console.log(registro)
    return this.httpClient.post<Liga>(this.API, registro).pipe(first());
  }
}
