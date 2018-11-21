import { Injectable } from '@angular/core';
// import { State } from 'src/app/shared/enums/state.enum';
import { Client } from 'src/app/shared/models/client.model';
import { fakeClients } from './fake-client';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root' // permet d'utiliser le service sans le déclarer dans providers (Angular 6+)
})
export class ClientService {

  // Le _ permet d'appeler les méthodes magiques set / get
  private _collection: Client[];

  constructor() {
    this.collection = fakeClients;
   }

  // get collection
  // use => return this.collection
  public get collection(): Client[] {
    return this._collection;
  }

  // set collection
  // use => this.collection = fakePrestations
  // use => this.collection.push(item:Prestation)
  public set collection(col: Client[]) {
    this._collection = col;
  }

  // add item in collection

  // update item in collection
  public update(item: Client, state: StateClient) {
    item.stateClient = state;
  }

  // delete item in collection

  // get item by id
}
