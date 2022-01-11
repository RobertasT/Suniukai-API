import { TestBed } from '@angular/core/testing';

import { GlobalusDuomenysService } from './globalus-duomenys.service';

describe('GlobalusDuomenysService', () => {
  let service: GlobalusDuomenysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalusDuomenysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
