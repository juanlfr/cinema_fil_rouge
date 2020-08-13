import { SeanceComponent } from './components/seances/seance/seance.component';
import { FilmComponent } from './components/films/film/film.component';
import { ListeFilmsComponent } from './components/films/liste-films/liste-films.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'liste', component: ListeFilmsComponent},
  {path: 'liste/:id', component: FilmComponent},
  {path: 'liste-seances/:filmId', component: SeanceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
