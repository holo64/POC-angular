import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FraisModule} from './frais/frais.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClientsModule } from './clients/clients.module'; 

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';// import ajout module HttpClient

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,// declaration import ajout module HttpClient
    ClientsModule, 
    FraisModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
