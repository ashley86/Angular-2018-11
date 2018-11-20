import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  constructor() {}

  transform(value: any, args?: any): any {
    // Vérifie si une valeur est donnée. Sinon l'application plante
    if (value) {
      // L'argument sert à dire qu'on demande le Total TTC
      if (args) {
         return value.totalTtc();
      }
      return value.totalHt();
    }

    return null;
  }

}
