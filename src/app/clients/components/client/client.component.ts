import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { ClientService } from 'src/app/clients/services/client.service';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  // Permet au parent de remplir cette variable
  @Input() item: Client;
  public statesClients = Object.values(StateClient);
  public faTrash = faTrash;
  public faEdit = faEdit;

  constructor(
    private cs: ClientService
  ) {}

  ngOnInit() {
  }

  public changeState(event) {
    const stateClient = event.target.value;
    // this.ps.update(this.item, state);
    this.cs.update(this.item, stateClient).then((data) => {
      // Si l'api retour OK, on peut mettre à jour le state de l'élément local
      this.item.stateClient = stateClient;
    });
  }

  public deleteClient(item: Client) {
    this.cs.delete(item).then((data) => {
      console.log('delete client', data);
    });
  }

}
