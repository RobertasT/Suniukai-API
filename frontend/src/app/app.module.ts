import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagrindinisComponent } from './puslapiai/pagrindinis/pagrindinis.component';
import { ApieComponent } from './puslapiai/apie/apie.component';
import { MeniuComponent } from './meniu/meniu.component';
import { Meniu2Component } from './puslapiai/meniu2/meniu2.component';
import { RegistruotisComponent } from './puslapiai/registruotis/registruotis.component';
import { PrisijungtiComponent } from './puslapiai/prisijungti/prisijungti.component';
import { Meniu2meniuComponent } from './puslapiai/meniu2meniu/meniu2meniu.component';

@NgModule({
  declarations: [
    AppComponent,
    PagrindinisComponent,
    ApieComponent,
    MeniuComponent,
    Meniu2Component,
    RegistruotisComponent,
    PrisijungtiComponent,
    Meniu2meniuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
