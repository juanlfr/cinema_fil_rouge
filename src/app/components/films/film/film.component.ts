import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmWebService } from '../../../shared/webservices/film.webservice';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  film: any;

  constructor(private route: ActivatedRoute, private filmWebService: FilmWebService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.filmWebService.getFilm(id).subscribe(
        (data) => {
          this.film = data;
        }
      );

    }
      );
  }

}
