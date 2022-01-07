import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteCompostoComponent } from './autocomplete-composto.component';

describe('AutocompleteCompostoComponent', () => {
  let component: AutocompleteCompostoComponent;
  let fixture: ComponentFixture<AutocompleteCompostoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteCompostoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteCompostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
