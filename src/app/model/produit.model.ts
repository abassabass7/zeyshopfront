import { Categorie } from "./cotegorie.model";

export class Produit{
idProduit!:number;
nomProduit!:string;
prixProduit!:number;
dateCreation!:Date;
categorie! : Categorie;

}