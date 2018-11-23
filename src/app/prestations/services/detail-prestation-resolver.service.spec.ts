import { TestBed } from '@angular/core/testing';

import { DetailPrestationResolverService } from './detail-prestation-resolver.service';

describe('DetailPrestationResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailPrestationResolverService = TestBed.get(DetailPrestationResolverService);
    expect(service).toBeTruthy();
  });
});
