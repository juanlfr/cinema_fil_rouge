import { ClientWebservice } from './../../shared/webservices/client.webservice';
import { Client } from './../../shared/webservices/models/client.model';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  clients: Client[];
  client: Client;

  constructor(private clientWebService: ClientWebservice, private router: Router) { }

  ngOnInit(): void {
    this.client = new Client();
  }

  handleSubmitClientForm(client: Client): void {
    this.clientWebService.postClient(client).subscribe(
      (newClient) => {
        this.client = newClient;
        console.log(this.client);
      },
      (error) => {
        // Error
        console.error('CallObservableComponent error', error);
      }
    );
    this.router.navigate(['/liste']);

  }

}
