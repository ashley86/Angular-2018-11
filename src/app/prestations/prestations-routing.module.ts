import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailPrestationComponent } from './components/client-detail-prestation/client-detail-prestation.component';
import { DetailPrestationComponent } from './components/detail-prestation/detail-prestation.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PageEditPrestationComponent } from './pages/page-edit-prestation/page-edit-prestation.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { DetailPrestationResolverService } from './services/detail-prestation-resolver.service';

const appRoutes: Routes = [
  {
    path: '',
    component: PagePrestationsComponent,
    children: [ // Vise le router-outlet qui se trouve dans `PagePrestationsComponent`
      { path: 'detail', component: DetailPrestationComponent },
      { path: 'client', component: ClientDetailPrestationComponent },
    ]
  },
  { path: 'add', component: PageAddPrestationComponent },
  { path: 'edit/:id', component: PageEditPrestationComponent, resolve: { item: DetailPrestationResolverService } }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class PrestationsRoutingModule { }
