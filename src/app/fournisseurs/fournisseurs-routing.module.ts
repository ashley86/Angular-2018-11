import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddFournisseurComponent } from './pages/page-add-fournisseur/page-add-fournisseur.component';
import { PageFournisseursComponent } from './pages/page-fournisseurs/page-fournisseurs.component';

const appRoutes: Routes = [
  { path: '', component: PageFournisseursComponent },
  { path: 'add', component: PageAddFournisseurComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  exports: [RouterModule]
})
export class FournisseursRoutingModule { }
