import { Component, OnInit } from '@angular/core';
import { AllBook } from '../../../models/book.model';
import { BookService } from '../../../services/book/book.service';
import { FormsModule } from '@angular/forms';
import { CategoryFilterPipe } from '../../../pipes/category-filter.pipe';
import { CommonModule } from '@angular/common';
import { SortPipe } from "../../../pipes/sort.pipe";
import { IApiResponse } from '../../../models/book.model';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [FormsModule, CategoryFilterPipe, CommonModule, SortPipe],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: AllBook[] = [];
  categories: string[] = [];
  searchText: string = '';
  selectedCategory: string = '';
  sortOption: keyof AllBook = 'rating'; 

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getAllBook().subscribe({
      next: (response: IApiResponse) => {
        if (response && response.result) {
          this.books = response.data;
          this.extractCategories();
        } else {
          console.error('Kitaplar alınırken hata:', response?.message || 'Bilinmeyen hata');
        }
      },
      error: (err) => {
        console.error('Kitapları yüklerken hata:', err.message || err);
      }
    });
  }
  
  

  extractCategories(): void {
    this.categories = [...new Set(this.books.map(book => book.category))];
  }

  viewDetails(bookId: string): void {
    console.log('Kitap Detayları için ID:', bookId);
  }

  toggleFavorite(book: AllBook): void {
    book.isFavorite = !book.isFavorite;
  }
}
