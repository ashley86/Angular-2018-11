import { Component, OnInit } from '@angular/core';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons'; // Importe les icônes dont on a besoin, plutôt que toute la librairie FA

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title: string;
  public faUser = faUser;
  public faBars = faBars;
  public open = true;

  constructor() { }

  ngOnInit() {
    this.title = 'My CRM';
  }

}
