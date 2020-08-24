import { SeanceWebService } from './../../../shared/webservices/seances.webservice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-seances',
  templateUrl: './liste-seances.component.html',
  styleUrls: ['./liste-seances.component.scss']
})
export class ListeSeancesComponent implements OnInit {

  seanceList: any[];

  constructor(
    private seanceWebService: SeanceWebService
    ) { }

  ngOnInit(): void {
    this.getSeance();
  }

  getSeance(): void{
    this.seanceWebService.getSeance().subscribe(
      (data) => {
        this.seanceList = data;
      }, (error) => {
        console.error(error);
      }
    );
  }
}
