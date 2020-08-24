import { Language } from './language.model';
import { Category } from './category.model';

export class Film {

    public id: number;
	public nom: string;
	public description: string;
	public duree: number;
    public releaseYear: number;
    public category: Category;
    public language: Language;

    constructor(
     id?: number,
     nom?: string,
     description?: string,
     duree?: number,
     releaseYear?: number,
     category?: Category,
     language?: Language

    ) {
     this.id = id;
     this.nom = nom;
     this.description = description;
     this.duree = duree;
     this.releaseYear = releaseYear;
     this.category = category;
     this.language = language;
    }
}