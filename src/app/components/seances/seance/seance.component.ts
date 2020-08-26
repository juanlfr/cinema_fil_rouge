import { Router } from '@angular/router';
import { Reservation } from './../../../shared/webservices/models/reservation.model';
import { ObservableService } from './../../../shared/services/observableService.service';
import { Seance } from './../../../shared/webservices/models/seance.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeanceWebService } from '../../../shared/webservices/seances.webservice';

@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.scss']
})
export class SeanceComponent implements OnInit {

  seances: Seance[];
  reservation: Reservation;
  seance: Seance;

  constructor(private route: ActivatedRoute, private seanceWebService: SeanceWebService, 
              private observableService: ObservableService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const filmId = params.get('filmId');
      // get seance with findById (java)
      this.seanceWebService.getSeances(filmId).subscribe(
        (data) => {
          console.log(data);
          this.seances = data;
        }
        );
      this.reservation = new Reservation();
      this.seance = new Seance();

    }
      );
  }

  setSeanceIntoReservation(seance: Seance): void {
    console.log('setSeanceIntoReservation');
    console.log(seance);
    this.reservation.seance = seance;
    this.observableService.setReservationSubject(this.reservation);
    console.log(this.reservation);
    this.router.navigate(['/client-form']);
  }
}
