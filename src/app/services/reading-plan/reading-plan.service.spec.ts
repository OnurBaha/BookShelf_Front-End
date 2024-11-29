import { TestBed } from '@angular/core/testing';

import { ReadingPlanService } from './reading-plan.service';

describe('ReadingPlanService', () => {
  let service: ReadingPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadingPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
