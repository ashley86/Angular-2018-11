/**
 * Modèle Fournisseur
 */
import { FournisseurI } from '../interfaces/fournisseur-i';
import { StateFournisseur } from '../enums/state-fournisseur.enum';

export class Fournisseur implements FournisseurI {
  id: string;
  nom: string;
  tel: string;
  adresse: string;
  stateFournisseur = StateFournisseur.SOCIETE;

   // Partial: Permet de ne pas passer tous les paramètres à l'instantiation
   // fields?: le '?' rend le paramètre optionnel
  constructor(
      fields?: Partial<Fournisseur>
  ) {
    if (fields) {
      Object.assign(this, fields); // Récupère les propriété d'un object pour l'affecter à un autre
    }
  }

}
