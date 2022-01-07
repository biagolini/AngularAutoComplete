import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteCompostoComponent } from './autocompleteCompostos/autocomplete-composto/autocomplete-composto.component';

import { AutocompleteSimplesComponent } from './autocompleteSimples/autocomplete-simples/autocomplete-simples.component';

const routes: Routes = [
  { path: "", redirectTo: "composto", pathMatch: "full" },
  { path: "simples",
    component: AutocompleteSimplesComponent
  },
  {
    path: "composto",
    component: AutocompleteCompostoComponent,
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
