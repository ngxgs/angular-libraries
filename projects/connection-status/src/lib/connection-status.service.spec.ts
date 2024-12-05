import { TestBed } from '@angular/core/testing';

import { ConnectionStatus } from './connection-status.service';

describe('ConnectionStatus', () => {
    let service: ConnectionStatus;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ConnectionStatus);
    });

    it('should be created the service', () => {
        expect(service).toBeTruthy();
    });

    it('should be true the initial online status', () => {
        expect(service.status()).toBeTrue();
    });
});
