import { Component, OnInit } from '@angular/core';
import { Frais } from '../frais';


@Component({
  selector: 'app-create-frais',
  templateUrl: './create-frais.component.html',
  styleUrls: ['./create-frais.component.css']
})
export class CreateFraisComponent implements OnInit {

  frais: Frais = null;

  constructor() {

  //création d'un nouveau Frais
    this.frais = new Frais();
  }

  ngOnInit(): void {
  }

}
