import { Component, OnInit } from '@angular/core';
// Importe les icônes dont on a besoin, plutôt que toute la librairie FA
import { faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title: string;
  public faUser = faUser;
  public faBars = faBars;
  public faTimes = faTimes;
  public burgerIcon;
  public open = true;

  constructor() { }

  ngOnInit() {
    this.title = 'My CRM';
    this.burgerIcon = faTimes;
  }

  /**
   * Affiche / Cache le menu et change l'icône
   */
  toggleMenu() {
    this.open = !this.open;
    this.burgerIcon = !this.open ? faBars : faTimes;
  }

}
