import { StateFournisseur } from '../enums/state-fournisseur.enum';

export interface FournisseurI {
  id: String;
  nom: String;
  tel: String;
  adresse: String;
  stateFournisseur: StateFournisseur;
}
