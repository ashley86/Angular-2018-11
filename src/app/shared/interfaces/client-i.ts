import { StateClient } from '../enums/state-client.enum';

export interface ClientI {
  id: String;
  nom: String;
  email: String;
  stateClient: StateClient;
}
