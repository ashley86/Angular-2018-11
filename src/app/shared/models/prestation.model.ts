/**
 *
 */
import { PrestationI } from '../interfaces/prestation-i';
import { State } from '../enums/state.enum';

export class Prestation implements PrestationI {
  id: string;
  typePresta: string;
  client: string;
  tauxTva = 20;
  tjmHt = 500;
  nbJours = 0; // Valeur par défaut pour ne pas retourner Nan
  state = State.OPTION;

   // Partial: Permet de ne pas passer tous les paramètres à l'instantiation
   // fields?: le '?' rend le paramètre optionnel
  constructor(
      fields?: Partial<Prestation>
  ) {
    if (fields) {
      Object.assign(this, fields); // Récupère les propriété d'un object pour l'affecter à un autre
    }
  }

  // Retourne le total HT en fonction du nombre de jours
  totalHt() {
    return this.nbJours * this.tjmHt;
  }

  // Retourne le total TTC en fonction du total HT et du taux de TVA
  totalTtc(tva?: number) {
    if (!tva) {
      return this.totalHt() * (1 + this.tauxTva / 100);
    }
    if (tva <= 0) {
      return this.totalHt();
    }
    return this.totalHt() * (1 + tva / 100);
  }

}
