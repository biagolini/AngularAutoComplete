import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { FormControl, Validators, FormBuilder } from '@angular/forms';

export interface State {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'app-autocomplete-composto',
  templateUrl: './autocomplete-composto.component.html',
  styleUrls: ['./autocomplete-composto.component.css']
})
export class AutocompleteCompostoComponent {
  statesForm = this.fb.group({
    name: ['',Validators.required],
    population: [''],
    flag: [''],
  })


  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;

  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
    },
  ];

  constructor(private fb: FormBuilder) {
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.states.slice())),
    );
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();
    // Para cada letra digitada no input, esse método vai pegar a string digitada
    //console.log('FILTRANDO');
    //console.log(filterValue)
    this.statesForm.patchValue({
      name: filterValue });

    return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
  }

  onSubmit(){
    var nomeValido:boolean = false;
    for (var i = 0; i < this.states.length; i++) {
      if(this.states[i]['name'].toLowerCase() == this.statesForm.value['name'].toLowerCase()){ nomeValido = true}
    }
    if(nomeValido){
      console.log('Valor valido');
    } else{
      console.log('Valor invalido');
    }
  }
}
