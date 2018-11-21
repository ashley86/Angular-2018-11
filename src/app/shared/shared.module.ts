import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddRowComponent } from './components/add-row/add-row.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TotalPipe, TableauComponent, StateDirective, AddRowComponent],
  // Ne pas oublier d'insérer dans exports pour pouvoir utiliser ailleurs
  exports: [TotalPipe, TableauComponent, StateDirective, AddRowComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
  ],
  providers: []
})
export class SharedModule { }
