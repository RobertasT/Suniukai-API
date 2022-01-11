import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Meniu2Component } from './meniu2.component';

describe('Meniu2Component', () => {
  let component: Meniu2Component;
  let fixture: ComponentFixture<Meniu2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Meniu2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Meniu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
