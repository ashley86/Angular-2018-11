import { LOCALE_ID, NgModule } from '@angular/core'; // LOCALE_ID: Utiliser les euros pour transformer une valeur
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { UiModule } from './ui/ui.module';

// Utiliser les euros pour transformer une valeur
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

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
  providers: [
    {
      provide: LOCALE_ID, // Utiliser les euros pour transformer une valeur
      useValue: 'fr-FR' // Utiliser les euros pour transformer une valeur
    }
  ], // Utiliser les euros pour transformer une valeur
  bootstrap: [AppComponent]
})
export class AppModule { }
