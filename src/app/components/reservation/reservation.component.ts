import { Reservation } from './../../shared/webservices/models/reservation.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  reservation: Reservation;

  constructor() { }

  ngOnInit(): void {
    this.reservation = new Reservation();
  }

}
