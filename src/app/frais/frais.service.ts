import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Frais } from './frais';

@Injectable({
  providedIn: 'root'
})
export class FraisService {
  
  private urlApi: string = 'http://localhost/poc/public/api/frais';
  
  //déclaration de HttpClient par injection de dépendance
  constructor(private http: HttpClient) {}

  //Retourne tous les frais
  //le .json est nécessaire avec ApiPlatform qui a servi à l'API Web
  getFrais(): Observable<Frais[]> {
    return this.http.get<Frais[]>(this.urlApi + '.json');    
  }

  //Retourne le frais avec l'identifiant passé en paramètre
  getOneFrais(id: number) {
    return this.http.get<Frais>(this.urlApi + '/' + id + '.json');
  }
    
  //Pour créer le frais
  postFrais(frais: Frais) {
    return this.http.post(this.urlApi, frais);
  }


  //Pour modifier le frais
  putFrais(frais: Frais) {
    return this.http.put(this.urlApi + '/' + frais.id, frais);
  }

  //créer ou modifier le frais
  saveFrais(frais: Frais) {
    //null auto-increment
    if(frais.id==null) {
      return this.postFrais(frais); // données sérialisée au format json
    }
    else {
      return this.putFrais(frais);
    }  
  }

  //Pour supprimer le frais
  deleteFrais(frais: Frais) {
    this.http.delete(this.urlApi + '/' + frais.id)
      .subscribe(
        data => {
          console.log("DELETE Request is successful ", data);
        },
        error => {
          console.log("Error", error);
        }
      );
  }

  //Retourne la liste des frais correspondant au texte de recherche
  searchFrais(texte: string): Observable<Frais[]> {
    if(!texte)   {
      return this.getFrais();
    }
    console.log(`${this.urlApi}?nom=${texte}.json`);
    return this.http.get<Frais[]>(`${this.urlApi}.json?nom=${texte}`);    
  }


}


