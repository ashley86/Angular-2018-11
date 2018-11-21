import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {

  public states = Object.values(State);

  constructor() { }

  ngOnInit() {
  }

}
