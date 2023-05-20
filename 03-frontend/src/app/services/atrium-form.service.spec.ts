import { TestBed } from '@angular/core/testing';

import { AtriumFormService } from './atrium-form.service';

describe('AtriumFormService', () => {
  let service: AtriumFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtriumFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
