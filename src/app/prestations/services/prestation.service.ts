import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { fakePrestations } from './fake-prestation';

@Injectable({
  providedIn: 'root' // permet d'utiliser le service sans le déclarer dans providers (Angular 6+)
})
export class PrestationService {

  // Le _ permet d'appeler les méthodes magiques set / get
  private _collection: Prestation[];

  constructor() {
    this.collection = fakePrestations;
   }

  // get collection
  // use => return this.collection
  public get collection(): Prestation[] {
    return this._collection;
  }

  // set collection
  // use => this.collection = fakePrestations
  // use => this.collection.push(item:Prestation)
  public set collection(col: Prestation[]) {
    this._collection = col;
  }

  // add item in collection

  // update item in collection

  // delete item in collection

  // get item by id
}
