import { TestBed } from '@angular/core/testing';

import { BacklogserviceService } from './backlogservice.service';

describe('BacklogserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BacklogserviceService = TestBed.get(BacklogserviceService);
    expect(service).toBeTruthy();
  });
});
