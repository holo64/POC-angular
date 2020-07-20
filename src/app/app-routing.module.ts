import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
    //la route par défaut
    { path: '', redirectTo: 'frais', pathMatch: 'full' },
    //toutes les autres routes seront redirigées vers la PageNotFound
    //elle doit être mise en dernier
    { path: '**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
