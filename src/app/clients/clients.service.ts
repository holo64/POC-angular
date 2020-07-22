import { Injectable } from '@angular/core';
import { Client } from './client';
import { CLIENTS } from './mock-clients';



@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor() { }
// Retourne tous les clients
getClients(): Client[] {
  return CLIENTS;
}

// Retourne le client avec l'identifiant passé en paramètre
getClient(id: number): Client {
  let clients = this.getClients();
  
  for(let index = 0; index < clients.length; index++) {
    if(id === clients[index].id) {
      return clients[index];
    }
  }
}



}
