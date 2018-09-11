import { TestBed, inject } from '@angular/core/testing';

import { CustomPreloadService } from './custom-preload.service';

describe('CustomPreloadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomPreloadService]
    });
  });

  it('should be created', inject([CustomPreloadService], (service: CustomPreloadService) => {
    expect(service).toBeTruthy();
  }));
});
