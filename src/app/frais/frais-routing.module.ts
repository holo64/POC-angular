import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  
import { ListFraisComponent }    from './list-frais/list-frais.component';
import { DetailFraisComponent }  from './detail-frais/detail-frais.component';
import { EditFraisComponent }    from './edit-frais/edit-frais.component';
import { CreateFraisComponent }  from './create-frais/create-frais.component';
import { FraisFormStep2Component }   from './frais-form-step2/frais-form-step2.component';

// les routes du module Frais
const fraisRoutes: Routes = [
    { path: 'frais', component: ListFraisComponent },
    { path: 'frais/create/:id', component: CreateFraisComponent },
    { path: 'frais/:id', component: DetailFraisComponent },
    { path: 'frais/edit/:id', component: EditFraisComponent },
    { path: 'frais/create/:id/ok', component: FraisFormStep2Component },
   
];
  
@NgModule({
    imports: [
        RouterModule.forChild(fraisRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class FraisRoutingModule { }
