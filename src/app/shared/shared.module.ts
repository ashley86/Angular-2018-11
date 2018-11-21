import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { TableauComponent } from './components/tableau/tableau.component';
import { StateDirective } from './directives/state.directive';

@NgModule({
  declarations: [TotalPipe, TableauComponent, StateDirective],
  exports: [TotalPipe, TableauComponent, StateDirective], // Ne pas oublier d'insérer dans exports pour pouvoir utiliser ailleurs
  imports: [
    CommonModule
  ],
  providers: []
})
export class SharedModule { }
