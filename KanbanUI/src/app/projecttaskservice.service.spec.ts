import { TestBed } from '@angular/core/testing';

import { ProjecttaskserviceService } from './projecttaskservice.service';

describe('ProjecttaskserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjecttaskserviceService = TestBed.get(ProjecttaskserviceService);
    expect(service).toBeTruthy();
  });
});
