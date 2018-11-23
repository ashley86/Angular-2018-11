import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { PrestationService } from './prestation.service';
import { Prestation } from '../../shared/models/prestation.model';

@Injectable({
  providedIn: 'root'
})
export class DetailPrestationResolverService implements Resolve<Prestation> {

  constructor(
    private ps: PrestationService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Prestation> | Observable<never> {
    // Récupère le paramètre `id` dans la route
    const id = route.paramMap.get('id');

    return this.ps.getPrestation(id).pipe(
      take(1),
      mergeMap(data => {
        if (data) {
          return of(data);
        } else { // id not found
          this.router.navigate(['/prestations']);
          return EMPTY;
        }
      })
    );
  }
}
