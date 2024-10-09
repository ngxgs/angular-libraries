import { TestBed } from '@angular/core/testing';

import { PoweredStorage } from './powered-storage.service';

describe('PoweredStorage', () => {
  let service: PoweredStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoweredStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
