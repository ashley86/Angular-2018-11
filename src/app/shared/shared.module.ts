import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';

@NgModule({
  declarations: [TotalPipe],
  exports: [TotalPipe],
  imports: [
    CommonModule
  ],
  providers: [CurrencyPipe]
})
export class SharedModule { }
