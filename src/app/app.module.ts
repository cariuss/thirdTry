import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index copy/index.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { EcomerceComponent } from './ecomerce/ecomerce.component';


@NgModule({
  declarations: [
    AppComponent,
    RecuperarContrasenaComponent,
    EcomerceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IndexComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
