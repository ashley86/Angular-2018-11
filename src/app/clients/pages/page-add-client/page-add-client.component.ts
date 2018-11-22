import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {

  constructor(
    private cs: ClientService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public add(item: Client) {
    this.cs.add(item);
    this.router.navigate(['clients', /*arguments in second params*/]);
  }
}
