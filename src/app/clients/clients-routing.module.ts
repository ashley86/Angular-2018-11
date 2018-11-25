import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';
import { DetailClientResolveService } from './services/detail-client-resolve.service';

const appRoutes: Routes = [
  { path: '', component: PageClientsComponent },
  { path: 'add', component: PageAddClientComponent },
  { path: 'edit/:id', component: PageEditClientComponent, resolve: { item: DetailClientResolveService } },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class ClientsRoutingModule { }
