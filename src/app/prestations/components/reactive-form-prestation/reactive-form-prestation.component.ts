import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form-prestation',
  templateUrl: './reactive-form-prestation.component.html',
  styleUrls: ['./reactive-form-prestation.component.scss']
})
export class ReactiveFormPrestationComponent implements OnInit {

  public states = Object.values(State);
  public form: FormGroup; // Ne pas instancier, c'est le formBuilder qui va le faire
  // private init = new Prestation;
  @Input() init = new Prestation;
  // EventEmitter doit être importé depuis @angular/core
  @Output() nItem: EventEmitter<Prestation> = new EventEmitter();
  public preta$: Observable<Prestation>;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.createForm(); // Permet d'instancier le formulaire au chargement du composant

    this.route.data
      .subscribe((presta: Prestation ) => {
        this.init = new Prestation(presta);
      });
  }

  private createForm() {
    this.form = this.fb.group({  // Associe un group de champ à la variable this.form
      // Nous avons récupérer la quasi-totalité de l'interface Prestation-i
      // Ainsi que les valeurs par défaut définies dans le modèle
      typePresta: [
        this.init.typePresta,
        Validators.required // Validator unique
      ],
      client: [
        this.init.client,
        Validators.compose([ // Validators multiple
          Validators.required,
          Validators.minLength(3)
        ])
      ],
      tauxTva: [
        this.init.tauxTva,
        Validators.compose([ // Validators multiple
          Validators.required,
          Validators.pattern('([0-9]+)')
        ])
      ],
      tjmHt: [
        this.init.tjmHt,
        Validators.compose([ // Validators multiple
          Validators.required,
          Validators.pattern('([0-9]+)')
        ])
      ],
      nbJours: [
        this.init.nbJours,
        Validators.compose([ // Validators multiple
          Validators.required,
          Validators.pattern('([0-9]+)'),
          Validators.minLength(2)
        ])
      ],
      state: [
        this.init.state,
        Validators.compose([ // Validators multiple
          Validators.required
        ])
      ],
    });
  }

  public onSubmit() {
    console.log(this.form.value);
    this.nItem.emit(this.form.value);
  }

  public isError(fcName): boolean {
    // Piste pour personnaliser le message d'erreur
    // console.log('isError', this.form.get(fcName));
    // console.log(fcName, ' invalid? ', this.form.get(fcName).invalid);
    return this.form.get(fcName).invalid && this.form.get(fcName).touched;
  }
}
