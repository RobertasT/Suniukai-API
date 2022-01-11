import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistruotisComponent } from './registruotis.component';

describe('RegistruotisComponent', () => {
  let component: RegistruotisComponent;
  let fixture: ComponentFixture<RegistruotisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistruotisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistruotisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
