import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {

  constructor(
    private cs: ClientService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public edit(item: Client) {
    // this.cs.add(item);
    // this.router.navigate(['clients', /*arguments in second params*/]);

    this.cs.update(item).then((data) => {
      // en fonction du retour de l'api, on peut rediriger
      this.router.navigate(['clients']);
    });
  }

}
