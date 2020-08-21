import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeFilmsComponent } from './components/films/liste-films/liste-films.component';
import { FilmWebService } from './shared/webservices/film.webservice';
import { SeanceWebService } from './shared/webservices/seances.webservice';
import { FilmComponent } from './components/films/film/film.component';
import { SeanceComponent } from './components/seances/seance/seance.component';
import { HeaderComponent } from './components/header/header.component';
import { ListeSeancesComponent } from './components/seances/liste-seances/liste-seances.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeFilmsComponent,
    FilmComponent,
    SeanceComponent,
    HeaderComponent,
    ListeSeancesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    FilmWebService,
    SeanceWebService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
