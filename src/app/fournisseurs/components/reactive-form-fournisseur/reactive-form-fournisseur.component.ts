import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StateFournisseur } from 'src/app/shared/enums/state-fournisseur.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fournisseur } from 'src/app/shared/models/fournisseur.model';

@Component({
  selector: 'app-reactive-form-fournisseur',
  templateUrl: './reactive-form-fournisseur.component.html',
  styleUrls: ['./reactive-form-fournisseur.component.scss']
})
export class ReactiveFormFournisseurComponent implements OnInit {

  public statesFournisseur = Object.values(StateFournisseur);
  public form: FormGroup;
  private init = new Fournisseur;
  @Output() nItem: EventEmitter<Fournisseur> = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      nom: [
        this.init.nom,
        Validators.compose([
          Validators.required
        ])
      ],
      tel: [
        this.init.tel,
        Validators.compose([
          Validators.required
        ])
      ],
      adresse: [
        this.init.adresse,
        Validators.compose([
          Validators.required
        ])
      ],
      stateFournisseur: [
        this.init.stateFournisseur,
        Validators.compose([
          Validators.required
        ])
      ]
    });
  }

  public onSubmit() {
    console.log('fournisseur form', this.form.value);
    this.nItem.emit(this.form.value);
  }

  /**
   * Possibilité de mettre cette méthode dans un service ?
   * @param fcName FormControlName
   */
  public isError(fcName): boolean {
    return this.form.get(fcName).invalid && this.form.get(fcName).touched;
  }

}
