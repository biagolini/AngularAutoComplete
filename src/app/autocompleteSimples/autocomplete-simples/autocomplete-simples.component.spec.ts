import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteSimplesComponent } from './autocomplete-simples.component';

describe('AutocompleteSimplesComponent', () => {
  let component: AutocompleteSimplesComponent;
  let fixture: ComponentFixture<AutocompleteSimplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteSimplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
