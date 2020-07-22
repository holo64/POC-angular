import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  
import { ListClientComponent }    from './list-client/list-client.component';

  
// les routes du module Clients
const clientsRoutes: Routes = [
    { path: 'clients', component: ListClientComponent },

];
  
@NgModule({
    imports: [
        RouterModule.forChild(clientsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ClientRoutingModule { }
