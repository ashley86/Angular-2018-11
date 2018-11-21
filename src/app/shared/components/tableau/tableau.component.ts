import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableauComponent implements OnInit {

  // On demande une variable headers aux composants appelants
  @Input() headers: string[];

  constructor() { }

  ngOnInit() {
  }

}
