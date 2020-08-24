import { FilmWebService } from './../../../shared/webservices/film.webservice';
import { Language } from './../../../shared/webservices/models/language.model';
import { Category } from './../../../shared/webservices/models/category.model';
import { Film } from './../../../shared/webservices/models/film.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.scss']
})
export class FilmFormComponent implements OnInit {

  film: Film;
  categories: Category[];
  languages: Language[];

  constructor(private filmWebService: FilmWebService) { }

  ngOnInit(): void {
    //console.log(this.film);
    this.film = new Film();
    this.filmWebService.getCategories().subscribe(
      (data) => {
        this.categories = data;
      }
    );
    this.filmWebService.getLanguages().subscribe(
      (data) => {
        this.languages = data;
      }
    );
  }

  handleSubmitForm(film: Film){

  //console.log(film);
  this.filmWebService.postFilm(film).subscribe(
    () => {
      this.film = film;
      console.log(film);
    },
    (error) => {
      // Error
      console.error('CallObservableComponent error', error);
    }
  );


  }


}
