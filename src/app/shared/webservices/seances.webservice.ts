import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeanceWebService {

  baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }


  getSeances(filmId): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + `liste-seances/${filmId}`);
  }

  getSeance(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'liste-seances');
  }

//   addFilm(FilmToAdd: any): Observable<any> {
//     return this.http.post(this.baseUrl + 'Films', FilmToAdd);
//   }

//   updateFilm(FilmToUpdate: any, FilmId: number): Observable<any> {
//     return this.http.put(this.baseUrl + 'Films/' + FilmId, FilmToUpdate);
//   }

//   deleteFilm(FilmId: number): Observable<any> {
//     return this.http.delete(this.baseUrl + 'Films/' + FilmId);
//   }

  // getFilms(): Observable<Film[]> {
  //   return this.http.get<Film[]>(this.baseUrl + 'Films')
  //     .pipe(
  //       map((res: Film[]) => {
  //         console.log('FilmWebService getFilms map res', res);
  //         return res;
  //       }), // Si on veut manipuler les données avant de les renvoyer
  //       catchError((error) => this.handleError(error))
  //     );
  // }

  // addFilm(FilmToAdd: Film): Observable<any> {
  //   return this.http.post(this.baseUrl + 'Films', FilmToAdd)
  //     .pipe(
  //       catchError((error) => this.handleError(error))
  //     );
  // }

  // updateFilm(FilmToUpdate: Film, FilmId: number): Observable<any> {
  //   return this.http.put(this.baseUrl + 'Films/' + FilmId, FilmToUpdate)
  //     .pipe(
  //       catchError((error) => this.handleError(error))
  //     );
  // }

  // deleteFilm(FilmId: number): Observable<any> {
  //   return this.http.delete(this.baseUrl + 'Films/' + FilmId)
  //     .pipe(
  //       catchError((error) => this.handleError(error))
  //     );
  // }

  private handleError(error: HttpErrorResponse) {
    console.log('FilmWebService error', error);

    return throwError('Something bad happened; please try again later.');
  }

}
