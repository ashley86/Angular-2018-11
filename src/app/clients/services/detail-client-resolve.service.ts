import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, Resolve } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { ClientService } from './client.service';
import { mergeMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DetailClientResolveService implements Resolve<Client> {

  constructor(
    private router: Router,
    private cs: ClientService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Client> | Observable<never> {
    const id = route.paramMap.get('id');

    return this.cs.getClient(id).pipe(
      take(1),
      mergeMap(data => {
        if (data) {
          return of(data);
        } else {
          this.router.navigate(['clients']);
          return EMPTY;
        }
      })
    );
  }
}
