import { FilmWebService } from '../../../shared/webservices/film.webservice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-films',
  templateUrl: './liste-films.component.html',
  styleUrls: ['./liste-films.component.scss']
})
export class ListeFilmsComponent implements OnInit {

  filmList: any[];
  randIdPhoto: number = Math.floor(Math.random() * 25);
  IdPhoto: number;



  constructor(
    private filmWebService: FilmWebService
    ) { }

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms(): void {
    this.filmWebService.getFilms().subscribe(
      (data) => {
        this.filmList = data;
      }, (error) => {
        console.error(error);
      }
    );
  }


}
