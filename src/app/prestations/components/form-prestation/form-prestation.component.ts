import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {

  public states = Object.values(State);
  public init = new Prestation(); // On initialise le formulaire comme étant un objet Prestation
  // Permet d'envoyer de l'enfant d'un parent
  @Output() nItem: EventEmitter<Prestation> = new EventEmitter(); // Importer EventEmitter depuis @angular/core

  constructor() { }

  ngOnInit() {
  }

  public onSubmit() {
    // Méthode emit() nécessaire pour la liaison parent/enfant
    // Récupérer les données par défaut et envoyer les modifications
    this.nItem.emit(this.init);
  }

}
