import { Reservation } from './../webservices/models/reservation.model';
import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  reservationSubject$ = new BehaviorSubject<Reservation>(null);

  getReservationSubject(): Observable<Reservation> {
    return this.reservationSubject$.asObservable();
  }

  setReservationSubject(reservation: Reservation): void {
    this.reservationSubject$.next(reservation);
  }

}



