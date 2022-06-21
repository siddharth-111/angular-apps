import { TestBed } from '@angular/core/testing';

import { PlaceHolderDataServiceService } from './place-holder-data-service.service';

describe('PlaceHolderDataServiceService', () => {
  let service: PlaceHolderDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceHolderDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
