import { Salle } from './salle.model';
import { Film } from './film.model';
export class Seance {

    public dateDebut: Date;
    public film: Film;
    public salle: Salle;

    constructor(dateDebut?: Date, film?: Film, salle?: Salle) {
        this.dateDebut = dateDebut;
        this.film = film;
        this.salle = salle;

    }
}
