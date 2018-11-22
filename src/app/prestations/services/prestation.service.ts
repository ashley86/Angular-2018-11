import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Injectable({
  providedIn: 'root' // permet d'utiliser le service sans le déclarer dans providers (Angular 6+)
})
export class PrestationService {

  // Le _ permet d'appeler les méthodes magiques set / get
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  // Convention de nommage pour les Observable
  private _collection$: Observable<Prestation[]>;

  constructor(
    private afs: AngularFirestore
  ) {
    // this.collection = fakePrestations;
    this.itemsCollection = afs.collection<Prestation>('prestations');
    this.collection$ = this.itemsCollection.valueChanges().pipe(
      // Short version:
      // map(data => data.map(presta => new Prestation(presta)))
      // Long version:
      map((data) => {
        return data.map((presta) => {
          return new Prestation(presta);
        });
      })
    );
   }

  // get collection
  // use => return this.collection
  public get collection$(): Observable<Prestation[]> {
    return this._collection$;
  }

  // set collection
  // use => this.collection = fakePrestations
  // use => this.collection.push(item:Prestation)
  public set collection$(col: Observable<Prestation[]>) {
    this._collection$ = col;
  }

  // add item in collection
  public add(item: Prestation) {
    // Faire attention à retour un objet Prestation, sinon nous n'aurons pas accès aux méthodes du modèle
    // this.collection.push(new Prestation(item)); // sans utiliser le `_` , on fait appel à la méthode magique `set`
  }

  // update item in collection
  public update(item: Prestation, state: State) {
    item.state = state;
    console.log('update: ', item.state);

  }

  // delete item in collection

  // get item by id
}
