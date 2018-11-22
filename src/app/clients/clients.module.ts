import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { TemplateModule } from '../template/template.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientComponent } from './components/client/client.component';
import { ReactiveFormClientComponent } from './components/reactive-form-client/reactive-form-client.component';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';
import { EditClientComponent } from './containers/edit-client/edit-client.component';

@NgModule({
  declarations: [
    PageClientsComponent,
    ListClientsComponent,
    ClientComponent,
    PageAddClientComponent,
    ReactiveFormClientComponent,
    PageEditClientComponent,
    EditClientComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    TemplateModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule,
  ]
})
export class ClientsModule { }
