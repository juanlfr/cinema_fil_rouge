import { Cinema } from './cinema.model';

export class Salle {

    public nbrePlaceMax: number;
	public nom: string;
    public cinemas: Cinema[];
    
    constructor(
        nbrePlaceMax?: number,
        nom?: string,
        cinemas?: Cinema[])
    {
        this.nom = nom;
        this.nbrePlaceMax = nbrePlaceMax;
        this.cinemas = cinemas;
    }

}