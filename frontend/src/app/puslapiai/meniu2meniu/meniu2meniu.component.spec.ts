import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Meniu2meniuComponent } from './meniu2meniu.component';

describe('Meniu2meniuComponent', () => {
  let component: Meniu2meniuComponent;
  let fixture: ComponentFixture<Meniu2meniuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Meniu2meniuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Meniu2meniuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
