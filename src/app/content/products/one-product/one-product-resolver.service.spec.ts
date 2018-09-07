import { TestBed, inject } from '@angular/core/testing';

import { OneProductResolverService } from './one-product-resolver.service';

describe('OneProductResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OneProductResolverService]
    });
  });

  it('should be created', inject([OneProductResolverService], (service: OneProductResolverService) => {
    expect(service).toBeTruthy();
  }));
});
