import { Component, Input, OnInit } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {

  // Permet au parent de remplir cette variable
  @Input() item: Prestation;
  public states = Object.values(State);

  constructor(
    private ps: PrestationService
  ) {}

  ngOnInit() {
  }

  public changeState(event) {
    const state = event.target.value;
    this.ps.update(this.item, state);
  }

}
