export class Client {
    public nom: string;
    public prenom: string;
    public carteFidelite: boolean;

    constructor(
        nom?: string,
        prenom?: string,
        carteFidelite?: boolean)
    {
        this.nom = nom;
        this.prenom = prenom;
        this.carteFidelite = carteFidelite;
    }
}
