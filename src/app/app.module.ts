import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  Routes,RouterModule  } from '@angular/router';

import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { FormsModule } from '@angular/forms';
import { UpdateProduitComponent } from './update-produit/update-produit.component';


const appRoutes: Routes=[
  { path: 'produits', component: ProduitsComponent },
  { path: 'add-produit', component: AddProduitComponent },
  {path:"",redirectTo:"produits",pathMatch:"full"},
  {path: "updateProduit/:id", component: UpdateProduitComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    AddProduitComponent,
    UpdateProduitComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
