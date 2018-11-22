import { Component, Input, OnInit } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {

  // Permet au parent de remplir cette variable
  @Input() item: Prestation;
  public states = Object.values(State);
  public faTrash = faTrash;
  public faEdit = faEdit;

  constructor(
    private ps: PrestationService
  ) {}

  ngOnInit() {
  }

  public changeState(event) {
    const state = event.target.value;
    this.ps.update(this.item, state).then((data) => {
      // Si l'api retour OK, on peut mettre à jour le state de l'élément local
      this.item.state = state;
    });
  }

  public deletePresta(item: Prestation) {
    this.ps.delete(item).then((data) => {
      console.log('delete presta', data);
    });
  }

}
