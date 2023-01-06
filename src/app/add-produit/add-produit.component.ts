import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  
})
export class AddProduitComponent implements OnInit {
newProduit=new Produit();
message! :string;
  constructor(private produitService:ProduitService) { }

  ngOnInit(): void {
  }

  addProduit(){
    this.produitService.ajouterProduit(this.newProduit);
    this.message="le"+" "+  "produit"+ " " +this.newProduit.nomProduit + " "+ "ajouter avec succes"
  }

}
