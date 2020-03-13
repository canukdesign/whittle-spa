import { TestBed } from '@angular/core/testing';

import { WhittleApiService } from './whittle-api.service';

describe('WhittleApiService', () => {
  let service: WhittleApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhittleApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
