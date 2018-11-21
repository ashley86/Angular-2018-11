import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {

  public collection: Client[];
  public headers: String[];

  constructor(
    private ps: ClientService // Injection de dépendance
  ) { }

  /**
   * Initialisation de la liste client
   */
  ngOnInit() {
    // Code propre: travailler sur une classe qui appartient
    // à ma classe et non sur l'injection de dépendance
    this.collection = this.ps.collection;

    // Défini les colonnes du tableau qui sera affiché
    this.headers = ['id', 'Nom', 'E-mail', 'État'];
  }

}
