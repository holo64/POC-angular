import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListClientComponent } from './list-client/list-client.component';
import { ClientRoutingModule } from './clients-routing.module';
import { ClientsService } from './clients.service';



@NgModule({
  declarations: [ListClientComponent],
  
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  providers: [ClientsService]  //déclaration des fournisseurs de service
})
export class ClientsModule { }
