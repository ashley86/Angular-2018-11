import { NgModule } from '@angular/core';
import { RouterModule, Routes,  Router, PreloadAllModules } from '@angular/router';
import { PagesLoginComponent } from './login/pages/pages-login/pages-login.component';

const appRoutes: Routes = [
  { path: 'login', component: PagesLoginComponent },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full', // Utilise la base de l'url complète
  },
  {
    path: 'prestations',
    loadChildren: './prestations/prestations.module#PrestationsModule',
  },
  {
    path: 'clients',
    loadChildren: './clients/clients.module#ClientsModule',
  },
  { // 404
    path: '**',
    loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule',
  },
];

@NgModule({
  imports: [
     // forRoot utilisé comme singleton:
     // une seule instance, utilisable par toute l'application
     // `RouterModule` pourra être complété par d'autres modules
    RouterModule.forRoot(
      appRoutes,
       {
         enableTracing: false,  // <-- debugging purposes only, show trace on console
         preloadingStrategy: PreloadAllModules, // Précharge les modules au chargement de la page, aucun AJAX n'est exécuté
       }
    ),
  ]
})
export class AppRoutingModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
