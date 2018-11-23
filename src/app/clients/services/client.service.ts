import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client.model';

@Injectable({
  providedIn: 'root' // permet d'utiliser le service sans le déclarer dans providers (Angular 6+)
})
export class ClientService {

  // Le _ permet d'appeler les méthodes magiques set / get
  private itemsCollection: AngularFirestoreCollection<Client>;
  // Convention de nommage pour les Observable
  private _collection$: Observable<Client[]>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.itemsCollection = afs.collection<Client>('clients');
    this.collection$ = this.itemsCollection.valueChanges();
   }

  // get collection
  // use => return this.collection
  public get collection$(): Observable<Client[]> {
    return this._collection$;
  }

  // set collection
  // use => this.collection = fakePrestations
  // use => this.collection.push(item:Prestation)
  public set collection$(col: Observable<Client[]>) {
    this._collection$ = col;
  }

  // add item in collection
  /*public add(item: Client) {
    // Faire attention à retour un objet Client, sinon nous n'aurons pas accès aux méthodes du modèle
    this.collection.push(new Client(item)); // sans utiliser le `_` , on fait appel à la méthode magique `set`
  }*/
  // Add With Firebase
  add(item: Client) { // : Promise<any> {
    const id = this.afs.createId();
    // spread operators `...` : syntaxe de décomposition
    const client = { id, ...item };
    /*return this.itemsCollection.doc(id).set(client).catch((e) => {
      console.log(e);
    });*/
    // return this.http.post('urlapi/prestations', item);
  }

  // update item in collection
  /*public update(item: Prestation, state: State) {
    item.state = state;
    console.log('update: ', item.state);
  }*/

  // Update With Firebase
  update(item: Client, stateClient?: StateClient): Promise<any> {
    const client = {...item}; // Décompose l'objet item, et ne fait pas de copie par référence

    if (stateClient) {
      client.stateClient = stateClient;
    }
    return this.itemsCollection.doc(item.id).update(client).catch((e) => {
      console.log(e);
    });
  }

  // delete item in collection
  public delete(item: Client): Promise<any> {
    return this.itemsCollection.doc(item.id).delete().catch((e) => {
      console.log('delete', e);
    });
  }

  // get item by id
  getClient(id: string): Observable<Client> {
    console.log('getClient', this.itemsCollection.doc<Client>(id).valueChanges());

    return this.itemsCollection.doc<Client>(id).valueChanges();
  }
}
