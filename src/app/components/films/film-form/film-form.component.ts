import { FilmWebService } from './../../../shared/webservices/film.webservice';
import { Language } from './../../../shared/webservices/models/language.model';
import { Category } from './../../../shared/webservices/models/category.model';
import { Film } from './../../../shared/webservices/models/film.model';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.scss']
})
export class FilmFormComponent implements OnInit {

  film: Film;
  categories: Category[];
  languages: Language[];

  constructor(private filmWebService: FilmWebService, private router: Router) { }

  ngOnInit(): void {
    this.film = new Film();
    console.log(this.film);
    this.getCategories();
    this.getLangauges();
  }

  handleSubmitForm(film: Film): void {
    console.log(film.category);
    film.category =  film.category as Category;

    console.log(film);

    this.filmWebService.postFilm(film).subscribe(
      (newFilm) => {
        this.film = newFilm;
        console.log(this.film);
      },
      (error) => {
        // Error
        console.error('CallObservableComponent error', error);
      }
    );
    this.router.navigate(['/liste']);

  }
  getLangauges(): void{
    this.filmWebService.getLanguages().subscribe(
      (data) => {
        this.languages = data;
        console.log(this.languages);
      }
    );
  }

  getCategories(): void{
    this.filmWebService.getCategories().subscribe(
      (data) => {
        this.categories = data;
        console.log(this.categories);
      }
    );
  }



}
