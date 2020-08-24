import { FilmFormComponent } from './components/films/film-form/film-form.component';
import { ListeSeancesComponent } from './components/seances/liste-seances/liste-seances.component';
import { SeanceComponent } from './components/seances/seance/seance.component';
import { FilmComponent } from './components/films/film/film.component';
import { ListeFilmsComponent } from './components/films/liste-films/liste-films.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'liste', component: ListeFilmsComponent},
  {path: 'liste/:id', component: FilmComponent},
  {path: 'liste-seances/:filmId', component: SeanceComponent},
  {path: 'ajouter', component: FilmFormComponent},
  {path: 'liste-seances', component: ListeSeancesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
