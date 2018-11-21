/**
 *
 */
import { ClientI } from '../interfaces/client-i';
import { StateClient } from '../enums/state-client.enum';

export class Client implements ClientI {
  id: string;
  nom: string;
  email: string;
  stateClient = StateClient.ACTIF;

   // Partial: Permet de ne pas passer tous les paramètres à l'instantiation
   // fields?: le '?' rend le paramètre optionnel
  constructor(
      fields?: Partial<Client>
  ) {
    if (fields) {
      Object.assign(this, fields); // Récupère les propriété d'un object pour l'affecter à un autre
    }
  }

}
