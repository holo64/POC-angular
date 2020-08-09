import { Component, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Frais } from '../frais';
import { FraisService } from '../frais.service';



@Component({
  selector: 'app-frais-form',
  templateUrl: './frais-form.component.html',
  styleUrls: ['./frais-form.component.css']
})

export class FraisFormComponent implements OnChanges {
  //id_client: number;
  fraisForm: FormGroup; //le formulaire 

  @Input() frais: Frais; // propriété d'entrée du composant obligatoire
                               // disponible dans le module Input d'Angular
  
  // types disponibles pour un frais 
  // fraisTypes: Array<any> = [
  //   { value: 'Restaurant' },
  //   { value: 'Hôtel' }
 
  // ];

  //injection dela dépendance du FormBuilder
  constructor(private route:  ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private fraisService: FraisService) { }

  //création du formulaire grâce au FormBuilder
  //tous les champs de la classe sont obligatoires, avec le même nom
  //afin de pouvoir lier automatiquement l'objet !
  createFormGroup(): FormGroup {   
    return this.fb.group({ 
      id: [null],     
      typeFrais: ['', Validators.required],
      datePaiement: [new Date(),Validators.required],
      description: ['', Validators.required],
      montant: [0, Validators.required],
      typePaiement:['', Validators.required],
      justificatif: ['', Validators.required],
      createdAt: [new Date()],
      createdBy:['', Validators.required],
      lastUpdateAt:[new Date()],
      lastUpdateBy:['', Validators.required],
      client:['', Validators.required]
     });
  }

  // Détermine si le type passé en paramètres appartient 
  // ou non au frais en cours d'édition
//   hasType(type: string): boolean {
//     let index = this.frais.typeFrais.indexOf(type);
//     if (index > -1) return true;
//     return false;
// }



  // pour mettre à jour la propriété typeFrais du formulaire
  // à partir de la liste fraisTypes affichés, non liée au formulaire !
  // onCheckboxChange(e) {
  //   const typesArray: FormArray = this.fraisForm.get('fraisTypes') as FormArray;
  
  //   if (e.target.checked) {
  //     typesArray.push(new FormControl(e.target.value));
  //   } else {
  //     let i: number = 0;
  //     typesArray.controls.forEach((item: FormControl) => {
  //       if (item.value == e.target.value) {
  //         typesArray.removeAt(i);
  //         return;
  //       }
  //       i++;
  //     });
  //   }

  //   //nécessaire pour changer l'état du formulaire
  //   this.fraisForm.markAsDirty();
  // }
  

  // ATTENTION !
  // On utilise OnChanges plutot que OnInit
  // car le paramètre @Input sera récupéré en asynchrone
  // et ne sera pas défini sur onInit !!! 
  ngOnChanges(): void {
  //recup de l'id dans l'url (la route)
    //le snapshot permet de rendre la lecture synchrone 
    // this.id_client = +this.route.snapshot.paramMap.get('id');
    // console.log(this.id_client);
    let id_client=+this.route.snapshot.paramMap.get('id');
    console.log (id_client);
    // this.fraisForm = this.createFormGroup();
    // this.frais.client="api/clients/" + this.id_client.toString()
    // if(this.frais!=null) {
    //   this.fraisForm.patchValue( this.frais );
    // } 
    this.fraisForm = this.createFormGroup();
    this.frais.client="/api/clients/" + id_client.toString()
    if(this.frais!=null) {
      this.fraisForm.patchValue( this.frais );
    }    
  }

  onSubmit(){   
    //recupère les valeurs du formulaire
    this.frais = this.fraisForm.value as Frais;
    this.fraisService.saveFrais(this.frais)
    .subscribe(
      data => {
        console.log("Frais enregistré", data);
      },
      error => {
        console.log("Error", error);
      }
    );

    this.router.navigate(['/frais']);
  }

  goBack(): void {
    //pour revenir à la liste
    this.router.navigate(['/clients']);
  }


  afficherFormResto(): void {
    console.log('form Resto');
  }
  afficherFormHotel(): void {
    console.log('form Hotel');
  }

  test(event){
    console.log(event.target.files)
  }


}
