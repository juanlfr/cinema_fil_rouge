import { ReservationComponent } from './components/reservation/reservation.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { FilmFormComponent } from './components/films/film-form/film-form.component';
import { ListeSeancesComponent } from './components/seances/liste-seances/liste-seances.component';
import { SeanceComponent } from './components/seances/seance/seance.component';
import { ListeFilmsComponent } from './components/films/liste-films/liste-films.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalFilmComponent } from './shared/modal-film/modal-film.component';


const routes: Routes = [
  {path: 'liste', component: ListeFilmsComponent},
  {path: 'liste/:id', component: ModalFilmComponent},
  {path: 'liste-seances/:filmId', component: SeanceComponent},
  {path: 'ajouter', component: FilmFormComponent},
  {path: 'liste-seances', component: ListeSeancesComponent},
  {path: 'client-form', component: ClientFormComponent},
  {path: 'reservation', component: ReservationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
