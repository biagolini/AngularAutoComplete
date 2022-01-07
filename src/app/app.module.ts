import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AutocompleteCompostoComponent,
} from './autocompleteCompostos/autocomplete-composto/autocomplete-composto.component';
import { AutocompleteSimplesComponent } from './autocompleteSimples/autocomplete-simples/autocomplete-simples.component';
import { AppMaterialModule } from './shared/app-material/app-material.module';



@NgModule({
  declarations: [
    AppComponent,
    AutocompleteSimplesComponent,
    AutocompleteCompostoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
