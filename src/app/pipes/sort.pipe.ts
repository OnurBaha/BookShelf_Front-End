import { Pipe, PipeTransform } from '@angular/core';
import { AllBook } from '../models/book.model';  // AllBook modelini import edin

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(books: AllBook[], property: keyof AllBook, order: 'asc' | 'desc' = 'asc'): AllBook[] {
    if (!Array.isArray(books) || !property) {
      return books;
    }

    return books.sort((a, b) => {
      const valueA = a[property];
      const valueB = b[property];

      if (valueA < valueB) {
        return order === 'asc' ? -1 : 1;
      } else if (valueA > valueB) {
        return order === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
}
