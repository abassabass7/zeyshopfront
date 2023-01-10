import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Categorie } from '../model/cotegorie.model';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',

})
export class UpdateProduitComponent implements OnInit {
  currentProduit=new Produit;
  categories! : Categorie[];
  updatedIdCat! : number;

  constructor(  private activatedRoute: ActivatedRoute,
                private router: Router,
                private produitService: ProduitService) {}

  ngOnInit(): void {
    //console.log(this.activatedRoute.snapshot.params["id"]);
    this.categories = this.produitService.listeCategories();
      this.currentProduit=this.produitService.consrulterProduit(this.activatedRoute.snapshot.params["id"]);
      this.updatedIdCat=this.currentProduit.categorie.idCat;
     // console.log(this.currentProduit);
      

  }
  updateProduit()
  { //console.log(this.currentProduit);
  this.currentProduit.categorie=this.produitService.consulterCategorie(this.updatedIdCat);
  this.produitService.updateProduit(this.currentProduit);
  this.router.navigate(["produits"]);
  }
 

  }

