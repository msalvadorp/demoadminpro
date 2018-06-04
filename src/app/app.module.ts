import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//ROUTAS
import { APP_ROUTES } from './app.routes';

//Module
import { PageModule } from './pages/pages.module';

//servicios
import { SettingsService } from './services/settings.service';

//Compontentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { IncrementadorComponent } from './components/incrementador/incrementador.component';

 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PageModule
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
