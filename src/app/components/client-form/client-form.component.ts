import { ObservableService } from './../../shared/services/observableService.service';
import { Reservation } from './../../shared/webservices/models/reservation.model';
import { ClientWebservice } from './../../shared/webservices/client.webservice';
import { Client } from './../../shared/webservices/models/client.model';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  clients: Client[];
  client: Client;
  reservation: Reservation;

  constructor(private clientWebService: ClientWebservice, private router: Router, private observableService: ObservableService) { }

  ngOnInit(): void {
    this.client = new Client();
    this.observableService.getReservationSubject().subscribe(
      (dataSeanceReservation) => {
        this.reservation = dataSeanceReservation;
      }
    );
  }

  handleSubmitClientForm(client: Client): void {
    // this.clientWebService.postClient(client).subscribe(
    //   (newClient) => {
    //     this.client = newClient;
    //     console.log(this.client);
    //   },
    //   (error) => {
    //     console.error('CallObservableComponent error', error);
    //   }
    // );
    console.log(client);
    this.setClientIntoReservation(client);
    this.router.navigate(['/reservation']);

  }

  setClientIntoReservation(client: Client): void {
    console.log('setSeanceIntoReservation');
    this.reservation.client = client;
    this.observableService.setReservationSubject(this.reservation);
    console.log(this.reservation);
  }

}
