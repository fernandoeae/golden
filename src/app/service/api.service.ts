// movie.service.ts
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})


@NgModule({
  imports: [
    // ... outros módulos
    HttpClientModule,
  ],
  providers: [
    // ... outros provedores
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: provideInterceptor,
      multi: true,
    },
  ],
})
export class ApiService {
  private apiUrl = 'https://tools.texoit.com/backend-java/api/movies/'; // Substitua pela sua URL da API

  constructor(private http: HttpClient) {}

  getMultipleWinner(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?projection=years-with-multiple-winners`);
  }

  getStudioWinCount(): Observable<any> {
    //https://tools.texoit.com/backend-java/api/movies/?projection=studios-with-win-count
    return this.http.get<any>(`${this.apiUrl}?projection=studios-with-win-count`);
  }

  getProducerMaxMix(): Observable<any> {
    //https://tools.texoit.com/backend-java/api/movies/?projection=max-min-win-interval-for-producers
    return this.http.get<any>(`${this.apiUrl}?projection=max-min-win-interval-for-producers`);
  }

  getMovieWinnerBY(): Observable<any> {
    //https://tools.texoit.com/backend-java/api/movies/?winner=true&year=2018
    return this.http.get<any>(`${this.apiUrl}?winner=true&year=2018`);
  }
  
  // // no data 
  getAllMovies(): Observable<any> {
    //https://tools.texoit.com/backend-java/api/movies/?page=9&size=99&winner=true&year=2018
    return this.http.get<any>(`${this.apiUrl}?page=9&size=99&winner=true&year=2018`);
  }

  
  
}

export function provideInterceptor(): any {
  return {
    intercept: (req: HttpRequest<any>, next: HttpHandler) => {
      const withFetchReq = req.clone({ setHeaders: { 'Content-Type': 'application/json' } });
      return next.handle(withFetchReq);
    },
  };
}
