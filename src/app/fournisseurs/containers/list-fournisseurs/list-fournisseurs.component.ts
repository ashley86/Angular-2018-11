import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Fournisseur } from 'src/app/shared/models/fournisseur.model';
import { FournisseurService } from '../../services/fournisseur.service';

@Component({
  selector: 'app-list-fournisseurs',
  templateUrl: './list-fournisseurs.component.html',
  styleUrls: ['./list-fournisseurs.component.scss']
})
export class ListFournisseursComponent implements OnInit {

  public collection$: Observable<Fournisseur[]>;
  public headers: String[];

  constructor(
    private fs: FournisseurService
  ) { }

  ngOnInit() {
    this.collection$ = this.fs.collection$;
    this.headers = ['id', 'nom', 'tel', 'adresse', 'stateFournisseur', 'Actions'];
  }

}
