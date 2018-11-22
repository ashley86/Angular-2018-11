import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Client } from 'src/app/shared/models/client.model';

@Component({
  selector: 'app-reactive-form-client',
  templateUrl: './reactive-form-client.component.html',
  styleUrls: ['./reactive-form-client.component.scss']
})
export class ReactiveFormClientComponent implements OnInit {

  public statesClient = Object.values(StateClient);
  public form: FormGroup; // Ne pas instancier, c'est le formBuilder qui va le faire
  private init = new Client;
  // EventEmitter doit être importé depuis @angular/core
  @Output() nItem: EventEmitter<Client> = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm(); // Permet d'instancier le formulaire au chargement du composant
  }

  private createForm() {
    this.form = this.fb.group({  // Associe un group de champ à la variable this.form
      // Nous avons récupérer la quasi-totalité de l'interface Prestation-i
      // Ainsi que les valeurs par défaut définies dans le modèle
      nom: [
        this.init.nom,
        Validators.required // Validator unique
      ],
      email: [
        this.init.email,
        Validators.compose([ // Validators multiple
          Validators.required,
          Validators.email
        ])
      ],
      stateClient: [
        this.init.stateClient,
        Validators.compose([ // Validators multiple
          Validators.required
        ])
      ],
    });
  }

  public onSubmit() {
    console.log('client form', this.form.value);
    this.nItem.emit(this.form.value);
  }

  public isError(fcName): boolean {
    return this.form.get(fcName).invalid && this.form.get(fcName).touched;
  }
}
