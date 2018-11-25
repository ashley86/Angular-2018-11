import { TestBed } from '@angular/core/testing';

import { DetailClientResolveService } from './detail-client-resolve.service';

describe('DetailClientResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailClientResolveService = TestBed.get(DetailClientResolveService);
    expect(service).toBeTruthy();
  });
});
