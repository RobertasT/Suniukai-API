import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrisijungtiComponent } from './prisijungti.component';

describe('PrisijungtiComponent', () => {
  let component: PrisijungtiComponent;
  let fixture: ComponentFixture<PrisijungtiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrisijungtiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrisijungtiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
