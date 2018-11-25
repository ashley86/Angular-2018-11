import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {

  public item;
  public client: Client;

  constructor(
    private cs: ClientService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: {item: Client}) => {
      this.client = data.item;
    });
  }

  public edit(item: Client) {
    item.id = this.client.id; // on rajoute l'id, car on ne récupère pas l'id de base
    this.cs.update(item).then((data) => {
      // en fonction du retour de l'api, on peut rediriger
      this.router.navigate(['clients']);
    });
  }

}
