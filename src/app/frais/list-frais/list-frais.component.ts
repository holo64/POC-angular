import { Component, OnInit } from '@angular/core';
import { Frais } from '../frais'; // frais=frais.ts

@Component({
  selector: 'app-list-frais',
  templateUrl: './list-frais.component.html',
  styleUrls: ['./list-frais.component.css']
})
export class ListFraisComponent implements OnInit {

  title = 'Liste des Frais';
  pokemons: Frais[];  

  constructor() { }

  ngOnInit(): void {
  }

}
