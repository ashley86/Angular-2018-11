import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Component({
  selector: 'app-edit-prestation',
  templateUrl: './edit-prestation.component.html',
  styleUrls: ['./edit-prestation.component.scss']
})
export class EditPrestationComponent implements OnInit {

  public item;
  public presta: Prestation;

  constructor(
    private ps: PrestationService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: {item: Prestation}) => {
      this.presta = data.item;
    });
  }

  public edit(item: Prestation) {
    item.id = this.presta.id; // on rajoute l'id, car on ne récupère pas l'id de base
    this.ps.update(item).then((data) => {
      // en fonction du retour de l'api, on peut rediriger
      this.router.navigate(['prestations', /*arguments in second params*/]);
    });
  }

}
