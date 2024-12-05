import { Pipe, PipeTransform } from '@angular/core';
import { AllBook } from '../models/book.model';

@Pipe({
  name: 'categoryFilter',
  standalone: true
})
export class CategoryFilterPipe implements PipeTransform {

  transform(books: AllBook[], selectedCategory: string): AllBook[] {
    if (!selectedCategory) {
      return books;  // Eğer kategori seçilmemişse tüm kitapları döndür
    }

    // Kategorisi seçilenle eşleşen kitapları döndür
    return books.filter(book => book.category === selectedCategory);
  }
}
