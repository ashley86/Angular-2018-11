import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fournisseur } from 'src/app/shared/models/fournisseur.model';
import { FournisseurService } from '../../services/fournisseur.service';

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.scss']
})
export class AddFournisseurComponent implements OnInit {

  constructor(
    private fs: FournisseurService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public add(item: Fournisseur) {
    this.fs.add(item).then((data) => {
      this.router.navigate(['fournisseurs']);
    });
  }

}
