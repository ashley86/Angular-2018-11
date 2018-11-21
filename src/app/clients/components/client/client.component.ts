import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { ClientService } from 'src/app/clients/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  // Permet au parent de remplir cette variable
  @Input() item: Client;
  public states = Object.values(StateClient);

  constructor(
    private ps: ClientService
  ) {}

  ngOnInit() {
  }

  public changeState(event) {
    const state = event.target.value;
    this.ps.update(this.item, state);
  }

}
