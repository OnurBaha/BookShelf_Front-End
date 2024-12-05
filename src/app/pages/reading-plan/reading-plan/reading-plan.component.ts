import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reading-plan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reading-plan.component.html',
  styleUrl: './reading-plan.component.css'
})
export class ReadingPlanComponent {
  readingPlan = [];
}
