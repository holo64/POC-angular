import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { CLIENTS } from '../mock-clients';
import { ClientsService } from '../clients.service'; 
import { Router } from '@angular/router';  

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css'],
  providers: [ClientsService]  //déclaration des fournisseurs de service
})
export class ListClientComponent implements OnInit {
  title = 'Clients';
  clients: Client[]; 

  constructor(private router: Router, private clientsService: ClientsService) { }

  ngOnInit(): void {
    //this.clients = CLIENTS;
    //le service peut être utilisé
    this.clients = this.clientsService.getClients(); 
  }

  selectClient(client: Client) {
    console.log('Vous avez selectionné ' + client.nom);
  }

}
