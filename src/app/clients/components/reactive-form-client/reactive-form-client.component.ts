import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-reactive-form-client',
  templateUrl: './reactive-form-client.component.html',
  styleUrls: ['./reactive-form-client.component.scss']
})
export class ReactiveFormClientComponent implements OnInit {
  public statesClient = Object.values(StateClient);
  public form: FormGroup; // Ne pas instancier, c'est le formBuilder qui va le faire
//   private init = new Client;
  @Input() init = new Client;
// EventEmitter doit être importé depuis @angular/core
  @Output() nItem: EventEmitter<Client> = new EventEmitter();
  private id: string;
  public client$: Observable<Client>;

  constructor(
    private fb: FormBuilder,
    private cs: ClientService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log('id:', this.id); // Print the parameter to the console.
    });
  }

  ngOnInit() {
//    this.item = this.cs.getClient(this.id);
    // this.init = {...this.item};
   // console.log("init client", this.init);

    this.createForm(); // Permet d'instancier le formulaire au chargement du composant

    this.route.data
      .subscribe((client: Client) => {
        this.init = new Client(client);
      });
  }

  private createForm() {
    this.form = this.fb.group({
      // Associe un group de champ à la variable this.form
      // Nous avons récupérer la quasi-totalité de l'interface Prestation-i
      // Ainsi que les valeurs par défaut définies dans le modèle
      nom: [
        this.init.nom,
        Validators.required // Validator unique
      ],
      email: [
        this.init.email,
        Validators.compose([
          // Validators multiple
          Validators.required,
          Validators.email
        ])
      ],
      stateClient: [
        this.init.stateClient,
        Validators.compose([
          // Validators multiple
          Validators.required
        ])
      ]
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
