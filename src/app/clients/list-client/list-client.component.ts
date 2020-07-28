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
  public title = 'Clients';
  public clients: Client[]; 
  

  constructor(private router: Router, private clientsService: ClientsService) { }

  ngOnInit(): void {
    //this.clients = CLIENTS;
    //le service peut être utilisé
    //this.clients = this.clientsService.getClients();
    this.clientsService.getClients()
    .subscribe(data => {
      console.log('Liste Clients ');
      this.clients = data;
    });
    
  }

  selectClient(client: Client) {
    console.log('Vous avez selectionné ' + client.nom);
    let link = ['frais/create/', client.id];
    this.router.navigate(link);
  }


  //public valeur: string = '';
  onKey(nom: string) {
    //this.valeur = nom;
    //methode search du service clientService
   this.clientsService.searchClients(nom) // a ne pas oublier
   .subscribe(data => {
     console.log('search Clients');
     console.log(data);
     this.clients = data;
     
   });

  }



}
