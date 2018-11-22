import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Fournisseur } from 'src/app/shared/models/fournisseur.model';
import { StateFournisseur } from 'src/app/shared/enums/state-fournisseur.enum';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  private itemsCollection: AngularFirestoreCollection<Fournisseur>;
  private _collection$: Observable<Fournisseur[]>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.itemsCollection = afs.collection<Fournisseur>('fournisseurs');
    this.collection$ = this.itemsCollection.valueChanges().pipe(
      map((data) => {
        return data.map((fournisseur) => {
          return new Fournisseur(fournisseur);
        });
      })
    );
  }

  // get collection
  public get collection$(): Observable<Fournisseur[]> {
    return this._collection$;
  }

  // set collection
  public set collection$(col: Observable<Fournisseur[]>) {
    this._collection$ = col;
  }

  // Add With Firebase
  add(item: Fournisseur): Promise<any> {
    const id = this.afs.createId();
    const fournisseur = { id, ...item };
    return this.itemsCollection.doc(id).set(fournisseur).catch((e) => {
      console.log(e);
    });
  }

  // Update With Firebase
  update(item: Fournisseur, stateFournisseur?: StateFournisseur): Promise<any> {
    const fournisseur = {...item};

    if (stateFournisseur) {
      fournisseur.stateFournisseur = stateFournisseur;
    }
    return this.itemsCollection.doc(item.id).update(fournisseur).catch((e) => {
      console.log(e);
    });
  }

  // delete item in collection
  public delete(item: Fournisseur): Promise<any> {
    return this.itemsCollection.doc(item.id).delete().catch((e) => {
      console.log('delete', e);
    });
  }

  // get item by id
  getFournisseur(id: string): Observable<Fournisseur> {
    return this.itemsCollection.doc<Fournisseur>(id).valueChanges();
  }
}
