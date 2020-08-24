import { FilmWebService } from '../../../shared/webservices/film.webservice';
import { Component, OnInit } from '@angular/core';
import { TestObservableService } from '../../../film-observable.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-liste-films',
  templateUrl: './liste-films.component.html',
  styleUrls: ['./liste-films.component.scss']
})
export class ListeFilmsComponent implements OnInit {

  filmList: any[];
  randIdPhoto: number = Math.floor(Math.random() * 25);
  IdPhoto: number;
  searchValue: string;

  subscription$: Subscription;
  message: string;

  filmListAfterSearch = [];

  constructor(
    private filmWebService: FilmWebService,
    private testObservableService: TestObservableService
    ) { }

  ngOnInit(): void {
    this.getFilms();
    this.subscription$ = this.testObservableService.getMessageSubject().subscribe(
      (value: string) => {
        this.message = value;
      }
    );
  }

  getFilms(): void {
    this.filmWebService.getFilms().subscribe(
      (data) => {
        this.filmList = data;
        this.filmListAfterSearch = this.filmList;
        console.log(this.filmList);
      }, (error) => {
        console.error(error);
      }
    );
  }

  handleSearchIntoList(): void {
    console.log(this.searchValue);
    if (this.searchValue){
    this.filmListAfterSearch = this.filmList.filter(
      (film) => film.nom.toUpperCase().includes(this.searchValue.toUpperCase())
    );
  } else {
    this.filmListAfterSearch = this.filmList;
  }
}
}
