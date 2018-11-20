/**
 *
 */
import { State } from '../enums/state.enum';

export interface PrestationI {
  id: string;
  typePresta: string;
  client: string;
  tauxTva: number;
  tjmHt: number;
  nbJours: number;
  state: State;
  test?: boolean; // N'oblige pas à implémenter lors de l'utilisation
}
