import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeanceWebService } from '../../../shared/webservices/seances.webservice';

@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.scss']
})
export class SeanceComponent implements OnInit {

  seances: any[];
 


  constructor(private route: ActivatedRoute, private seanceWebService: SeanceWebService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const filmId = params.get('filmId');
      this.seanceWebService.getSeances(filmId).subscribe(
        (data) => {
          console.log(data);
          this.seances = data;
          }
      );

    }
      );
  }
}
