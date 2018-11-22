import { Component, Input, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { StateFournisseur } from 'src/app/shared/enums/state-fournisseur.enum';
import { Fournisseur } from 'src/app/shared/models/fournisseur.model';
import { FournisseurService } from '../../services/fournisseur.service';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.scss']
})
export class FournisseurComponent implements OnInit {

  @Input() item: Fournisseur;
  public statesFournisseur = Object.values(StateFournisseur);
  public faTrash = faTrash;
  public faEdit = faEdit;

  constructor(
    private fs: FournisseurService
  ) { }

  ngOnInit() {
  }

  /**
   * Mets à jour le status du fournisseur
   * @param event évènement lors du changement du status du fournisseur
   */
  public changeStateFournisseur(event) {
    const stateFournisseur = event.target.value;
    this.fs.update(this.item, stateFournisseur).then((data) => {
      // Si l'api retour OK, on peut mettre à jour le state de l'élément local
      this.item.stateFournisseur = stateFournisseur;
    });
  }

  public deleteFournisseur(item: Fournisseur) {
    this.fs.delete(item).then((data) => {
      console.log('delete fournisseur', data);
    });
  }

}
