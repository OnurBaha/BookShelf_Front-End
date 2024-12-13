import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import trLocale from '@fullcalendar/core/locales/tr';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-reading-plan',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './reading-plan.component.html',
  styleUrls: ['./reading-plan.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReadingPlanComponent {
  readingPlan = [
    { book: { name: 'Kitap 1', author: 'Yazar 1' }, startDate: '2024-12-15', endDate: '2024-12-20' },
    { book: { name: 'Kitap 2', author: 'Yazar 2' }, startDate: '2024-12-25', endDate: '2025-01-05' },
  ];

  calendarPlugins = [dayGridPlugin, interactionPlugin, timeGridPlugin];
  calendarLocale = trLocale;
  calendarEvents = this.readingPlan.map(plan => ({
    title: plan.book.name,
    start: plan.startDate,
    end: plan.endDate,
  }));

  handleDateSelect(arg: any) {
    const title = prompt('Etkinlik başlığını girin:');
    if (title) {
      this.calendarEvents = [
        ...this.calendarEvents,
        { title, start: arg.startStr, end: arg.endStr }
      ];
    }
  }

  removePlan(index: number) {
    this.readingPlan.splice(index, 1);
    this.calendarEvents = this.readingPlan.map(plan => ({
      title: plan.book.name,
      start: plan.startDate,
      end: plan.endDate,
    }));
  }
}
