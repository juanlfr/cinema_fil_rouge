export class Client {

    public id: number;
    public nom: string;
    public prenom: string;
    public carteFidelite: boolean;

    constructor(
        id?: number,
        nom?: string,
        prenom?: string,
        carteFidelite?: boolean)
    {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.carteFidelite = carteFidelite;
    }
}
