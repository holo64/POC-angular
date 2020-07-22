import { Component, OnInit } from '@angular/core';
import { Frais } from '../frais'; // frais=frais.ts
import {FraisService} from '../frais.service'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-list-frais',
  templateUrl: './list-frais.component.html',
  styleUrls: ['./list-frais.component.css'],
  providers: [FraisService]  //déclaration des fournisseurs de service
})
export class ListFraisComponent implements OnInit {

  title = 'Liste des Frais';
  frais: Frais[];  

  //modifie constructeur pour utiliser le service
  constructor(private fraisService:FraisService,
              private router: Router) { }

  ngOnInit(): void {
    //le service peut être utilisé et
    //on ajoute la méthode .subscribe pour s'abonner à l'observable
   this.fraisService.getFrais()
   .subscribe( data =>{
    //console.log("retour getFrais");
     //console.log(data);
     this.frais =data; // frais =tableau de données defini plus haut vide
   });
  }

  selectFrais(frais: Frais){
    //console.log ('select frais');
    //console.log('Vous avez selectionné ' + frais.nom);
    let link = ['frais', frais.id];
    this.router.navigate(link);
  }

}
