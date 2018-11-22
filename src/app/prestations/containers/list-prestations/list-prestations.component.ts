import { Component, OnInit, OnDestroy } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit /*, OnDestroy*/ {

  // public collection$: Prestation[];
  public collection$: Observable<Prestation[]>;
  public headers: String[];
  // private sub: Subscription;

  constructor(
    private ps: PrestationService // Injection de dépendance
  ) { }

  ngOnInit() {
    // Code propre: travailler sur une classe qui appartient
    // à ma classe et non sur l'injection de dépendance
    this.collection$ = this.ps.collection$;
    // args de subscribe: flux de données, callback errors, callback notification complète
    /*this.sub = this.ps.collection$.subscribe((data) => {
      this.collection = data;
    }, (err) => {
      // erreurs lors de la souscription
      console.log('err:', err);
    }, () => {
      // redirection user vers autre page...
    });*/

    // Défini les colonnes du tableau qui sera affiché
    this.headers = ['id', 'type', 'client', 'taux TVA', 'nb jours', 'tjm HT', 'total HT', 'total TTC', 'État', 'Actions'];
  }

  /*
  Annulé dans le cas d'utilisation du pipe `async`
  ngOnDestroy() {
    this.sub.unsubscribe();
  }*/
}
