import { TarificadorService } from './tarificador.service';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelComponent } from './panel/panel.component';
import { ListaPresupuestosComponent } from './lista-presupuestos/lista-presupuestos.component';
import { registerLocaleData } from '@angular/common';

import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs, 'es');
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanelComponent,
    ListaPresupuestosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TarificadorService,
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 
