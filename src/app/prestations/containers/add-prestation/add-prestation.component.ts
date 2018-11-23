import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {

  constructor(
    private ps: PrestationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public add(item: Prestation) {
    this.ps.add(item).then((data) => {
      // en fonction du retour de l'api, on peut rediriger
      this.router.navigate(['prestations', /*arguments in second params*/]);
    });

    // En cas de requête HTTP
/*    this.ps.add(item).subscribe((data) => {
        // actions...
      }); */
    // Ne pas oublier d'utilise UNSUBSCRIBE dans un ngOnDestroy();
  }

}
