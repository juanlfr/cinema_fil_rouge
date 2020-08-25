import { Cinema } from './cinema.model';
import { Client } from './client.model';

export class Reservation {

    public localDateTime: Date;
    public cinema: Cinema;
    public client: Client;
    public seatsReserved: number;

    constructor(
        localDateTime?: Date,
        cinema?: Cinema,
        client?: Client,
        seatsReserved?: number
    ) {
        this.localDateTime = localDateTime;
        this.cinema = cinema;
        this.client = client;
        this.seatsReserved = seatsReserved;
    }
}