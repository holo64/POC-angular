import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Frais } from '../frais';


@Component({
  selector: 'app-create-frais',
  templateUrl: './create-frais.component.html',
  styleUrls: ['./create-frais.component.css']
})
export class CreateFraisComponent implements OnInit {

  frais: Frais = null;

  constructor(private route:  ActivatedRoute,
              private router: Router,) {

  //création d'un nouveau Frais
    this.frais = new Frais();
  }

  ngOnInit(): void {
  // //recup de l'id dans l'url (la route)
  //   //le snapshot permet de rendre la lecture synchrone 
  //   let id_client = +this.route.snapshot.paramMap.get('id');
  //   console.log(id_client);
    

  }

}
