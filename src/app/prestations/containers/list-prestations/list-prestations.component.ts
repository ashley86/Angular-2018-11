import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {

  public collection: Prestation[];
  public headers: String[];

  constructor(
    private ps: PrestationService // Injection de dépendance
  ) { }

  ngOnInit() {
    // Code propre: travailler sur une classe qui appartient
    // à ma classe et non sur l'injection de dépendance
    this.collection = this.ps.collection;

    // Défini les colonnes du tableau qui sera affiché
    this.headers = ['id', 'type', 'client', 'taux TVA', 'nb jours', 'tjm HT', 'total HT', 'total TTC', 'État'];
  }

}
