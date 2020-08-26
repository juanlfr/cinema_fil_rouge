import { ReservationtWebservice } from './../../shared/webservices/reservation.webservice';
import { Client } from './../../shared/webservices/models/client.model';
import { ObservableService } from './../../shared/services/observableService.service';
import { Seance } from './../../shared/webservices/models/seance.model';
import { Reservation } from './../../shared/webservices/models/reservation.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit, OnDestroy {


  reservation: Reservation;
  seatsReserved: number;
  dateNowtoDate:Date = new Date();
  

  subscription$: Subscription;


  constructor(private observableService: ObservableService, private reservationtWebservice: ReservationtWebservice) { }

  ngOnInit(): void {

    this.getReservation();
    console.log('getReservation passed');
    console.log(this.reservation);
  }

  getReservation(): void {
    this.subscription$ = this.observableService.getReservationSubject().subscribe(
      (reservation) => {
        this.reservation = reservation;
        console.log(this.reservation);
      }, (error) => {
        console.error('CallObservableComponent error', error);
      }
    );
  }

  setReservation(): void {

    const dateNow = new Date(Date.now());
    const dateIso = dateNow.toISOString();
    this.reservation.localDateTime = new Date(dateIso);
    this.reservation.cinema = this.reservation.seance.salle.cinemas[0];
    this.reservation.seatsReserved = this.seatsReserved;
    

  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    if (this.subscription$) {
      this.subscription$.unsubscribe();
      console.log('this.subscription$.unsubscribe');
    }
  }
}
