import { TestBed } from '@angular/core/testing';

import { ServiceurlService } from './serviceurl.service';

describe('ServiceurlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceurlService = TestBed.get(ServiceurlService);
    expect(service).toBeTruthy();
  });
});
