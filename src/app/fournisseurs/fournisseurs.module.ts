import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { TemplateModule } from '../template/template.module';
import { FournisseurComponent } from './components/fournisseur/fournisseur.component';
import { ReactiveFormFournisseurComponent } from './components/reactive-form-fournisseur/reactive-form-fournisseur.component';
import { AddFournisseurComponent } from './containers/add-fournisseur/add-fournisseur.component';
import { ListFournisseursComponent } from './containers/list-fournisseurs/list-fournisseurs.component';
import { FournisseursRoutingModule } from './fournisseurs-routing.module';
import { PageAddFournisseurComponent } from './pages/page-add-fournisseur/page-add-fournisseur.component';
import { PageFournisseursComponent } from './pages/page-fournisseurs/page-fournisseurs.component';


@NgModule({
  declarations: [
    PageFournisseursComponent,
    ListFournisseursComponent,
    FournisseurComponent,
    PageAddFournisseurComponent,
    ReactiveFormFournisseurComponent,
    AddFournisseurComponent,
    ReactiveFormFournisseurComponent,
  ],
  imports: [
    CommonModule,
    FournisseursRoutingModule,
    SharedModule,
    TemplateModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class FournisseursModule { }
