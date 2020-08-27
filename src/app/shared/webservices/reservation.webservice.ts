import { Reservation } from './models/reservation.model';
import { Client } from './models/client.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class ReservationtWebservice {
    baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }


//   getClients(): Observable<Client[]> {
//     return this.http.get<any[]>(this.baseUrl + 'clients');
//   }

  postReservation(reservationToAdd: Reservation): Observable<any> {
    console.log(reservationToAdd);
    return this.http.post(this.baseUrl + 'ajouterReservation', reservationToAdd);
  }


}