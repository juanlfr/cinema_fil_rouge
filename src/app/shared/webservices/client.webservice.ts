import { Client } from './models/client.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class ClientWebservice {

    baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }


  getClients(): Observable<Client[]> {
    return this.http.get<any[]>(this.baseUrl + 'clients');
  }

  postClient(clientToAdd: Client): Observable<any> {
    console.log(clientToAdd);
    return this.http.post(this.baseUrl + 'addClient', clientToAdd);
  }


}