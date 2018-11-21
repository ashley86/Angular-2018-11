import { Directive, Input, HostBinding, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {

  // Ne pas passer l'objet item, mais bien le item.state car
  // @Input ne reconnais pas la modification d'un objet, mais seulement une valeur précise
  @Input() appState: any;
  @HostBinding('class') nomClass: String; // permet de binder l'attribut classe de l'élément html appelant la directive

  constructor() {
  }

  ngOnChanges() {
    this.nomClass = this.formatClass(this.appState);
  }

  private formatClass(state: any): String {
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}`;
  }

}
