import { TestBed } from '@angular/core/testing';

import { ConnectionStatus } from './connection-status.service';

describe('ConnectionStatus', () => {
  let service: ConnectionStatus;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectionStatus);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be true', () => {
    expect(service.isOnline()).toBeTrue();
  });
});
