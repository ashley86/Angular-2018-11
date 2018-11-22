import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
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
  /*public add(item: Prestation) {
    // Faire attention à retour un objet Prestation, sinon nous n'aurons pas accès aux méthodes du modèle
    // this.collection.push(new Prestation(item)); // sans utiliser le `_` , on fait appel à la méthode magique `set`
  }*/

  // Add With Firebase
  add(item: Prestation): Promise<any> {
    const id = this.afs.createId();
    // spread operators `...` : syntaxe de décomposition
    const prestation = { id, ...item };
    return this.itemsCollection.doc(id).set(prestation).catch((e) => {
      console.log(e);
    });
    // return this.http.post('urlapi/prestations', item);
  }

  // update item in collection
  /*public update(item: Prestation, state: State) {
    item.state = state;
    console.log('update: ', item.state);
  }*/

  // Update With Firebase
  update(item: Prestation, state?: State): Promise<any> {
    // Copie par référence
    // -> const presta = item;
    const presta = {...item}; // Décompose l'objet item, et ne fait pas de copie par référence

    if (state) {
      presta.state = state;
    }
    return this.itemsCollection.doc(item.id).update(presta).catch((e) => {
      console.log(e);
    });
    // return this.http.patch('urlapi/prestations/'+item.id, presta);
  }

  // delete item in collection
  public delete(item: Prestation): Promise<any> {
    return this.itemsCollection.doc(item.id).delete().catch((e) => {
      console.log('delete', e);
    });
    // return this.http.delete(`urlapi/prestations/${item.id}`);
  }

  // get item by id
  getPrestation(id: string): Observable<Prestation> {
    return this.itemsCollection.doc<Prestation>(id).valueChanges();
    // return this.http.get(`urlaspi/prestations/${id}`);
  }
}
