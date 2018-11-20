import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  constructor(private curr: CurrencyPipe) {}

  transform(value: any, args?: any): any {
    // Vérifie si une valeur est donnée. Sinon l'application plante
    if (value) {
      // L'argument sert à dire qu'on demande le Total TTC
      if (args) {
        return value.totalTtc().transform(this.curr, 'EUR');
        // return value.totalTtc();
      }
      return value.totalHt();
    }

    return null;
  }

}
