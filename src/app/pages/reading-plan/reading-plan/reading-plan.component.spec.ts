import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingPlanComponent } from './reading-plan.component';

describe('ReadingPlanComponent', () => {
  let component: ReadingPlanComponent;
  let fixture: ComponentFixture<ReadingPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadingPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
