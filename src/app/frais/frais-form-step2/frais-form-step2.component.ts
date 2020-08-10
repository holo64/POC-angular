import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-frais-form-step2',
  templateUrl: './frais-form-step2.component.html',
  styleUrls: ['./frais-form-step2.component.css']
})
export class FraisFormStep2Component implements OnInit {

  constructor(private route:  ActivatedRoute,
    private router: Router,) {  }

  ngOnInit(): void {
  }

  goListeClients(): void {
    //pour revenir à la liste de clients
    this.router.navigate(['/clients']);
  }

  goListeFrais(): void {
    //pour afficher la liste de frais
    this.router.navigate(['/frais']);
  }

}
