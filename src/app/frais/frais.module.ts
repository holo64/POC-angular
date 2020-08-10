import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFraisComponent } from './create-frais/create-frais.component';
import { DetailFraisComponent } from './detail-frais/detail-frais.component';
import { EditFraisComponent } from './edit-frais/edit-frais.component';
import { ListFraisComponent } from './list-frais/list-frais.component';

import { FraisRoutingModule } from './frais-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FraisFormComponent } from './frais-form/frais-form.component';
import { FraisFormStep2Component } from './frais-form-step2/frais-form-step2.component';





@NgModule({
  declarations: [
    CreateFraisComponent,
    DetailFraisComponent,
    EditFraisComponent,
    ListFraisComponent,
    FraisFormComponent,
    FraisFormStep2Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FraisRoutingModule
  ]
})
export class FraisModule { }
