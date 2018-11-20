import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { UiModule } from './ui/ui.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    UiModule,
    NgbModule.forRoot(), // Importation NG-Bootstrap
    AppRoutingModule, // Importation du routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
