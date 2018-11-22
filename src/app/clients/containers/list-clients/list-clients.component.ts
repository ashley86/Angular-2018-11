import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../../services/client.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {

  public collection$: Observable<Client[]>;
  public headers: String[];

  constructor(
    private cs: ClientService // Injection de dépendance
  ) { }

  /**
   * Initialisation de la liste client
   */
  ngOnInit() {
    // Code propre: travailler sur une classe qui appartient
    // à ma classe et non sur l'injection de dépendance
    this.collection$ = this.cs.collection$;

    // Défini les colonnes du tableau qui sera affiché
    this.headers = ['id', 'Nom', 'E-mail', 'État', 'Actions'];
  }

}
