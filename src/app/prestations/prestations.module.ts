import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TemplateModule } from '../template/template.module';
import { FormPrestationComponent } from './components/form-prestation/form-prestation.component';
import { PrestationComponent } from './components/prestation/prestation.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';

@NgModule({
  declarations: [
    PagePrestationsComponent,
    ListPrestationsComponent,
    PrestationComponent,
    PageAddPrestationComponent,
    AddPrestationComponent,
    FormPrestationComponent
  ],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
    TemplateModule,
    FormsModule,
  ]
})
export class PrestationsModule { }
