import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TemplateModule } from '../template/template.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientComponent } from './components/client/client.component';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';

@NgModule({
  declarations: [PageClientsComponent, ListClientsComponent, ClientComponent, PageAddClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    TemplateModule,
  ]
})
export class ClientsModule { }
