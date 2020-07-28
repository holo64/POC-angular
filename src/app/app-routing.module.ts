import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {ListClientComponent } from './clients/list-client/list-client.component';


const routes: Routes = [
    //la route par défaut
    { path: '', redirectTo: 'clients', pathMatch: 'full' },
    //toutes les autres routes seront redirigées vers la PageNotFound
    { path: 'clients', component:ListClientComponent },
    //elle doit être mise en dernier
    { path: '**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
