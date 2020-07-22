import { Injectable } from '@angular/core';
import { Client } from './client';
import { CLIENTS } from './mock-clients';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private urlApi: string = 'http://127.0.0.1/poc/public/api/clients';
  
  //déclaration de HttpClient par injection de dépendance
  constructor(private http: HttpClient) { }

// Retourne tous les clients
//le .json est nécessaire avec ApiPlatform qui a servit à l'API Web
// getClients(): Client[] {
//   return CLIENTS;
// }

getClients(): Observable<Client[]> {
  return this.http.get<Client[]>(this.urlApi + '.json');    
}

// Retourne le client avec l'identifiant passé en paramètre
// getClient(id: number): Client {
//   let clients = this.getClients();
  
//   for(let index = 0; index < clients.length; index++) {
//     if(id === clients[index].id) {
//       return clients[index];
//     }
//   }
// }

 //Retourne le client avec l'identifiant passé en paramètre
 getClient(id: number): Observable<Client> {
  return this.http.get<Client>(this.urlApi + '/' + id + '.json');
}


//Retourne la liste des clients correspondant au texte de recherche
searchClients(texte: string): Observable<Client[]> {
  if(!texte)   {
    return this.getClients();
  }
  console.log(`${this.urlApi}?nom=${texte}.json`);
  return this.http.get<Client[]>(`${this.urlApi}.json?nom=${texte}`);    
}


}
