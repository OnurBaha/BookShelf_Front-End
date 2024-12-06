import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book/book.service';
import { IApiResponse, AllBook } from '../../../models/book.model';
import { FormsModule } from '@angular/forms';
import { CategoryFilterPipe } from '../../../pipes/category-filter.pipe';
import { SortPipe } from '../../../pipes/sort.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [FormsModule, CategoryFilterPipe, CommonModule, SortPipe],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: any[] = [];
  errorMessage: string | null = null;
  categories: string[] = [];
  searchText: string = '';
  selectedCategory: string = '';
  sortOption: keyof AllBook = 'rating';

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(): void {
    this.bookService.getAllBooks()
      .subscribe({
        next: (response: IApiResponse) => {
          if (response && response.items) {
            this.books = response.items;
          } else {
            this.errorMessage = 'No books found.';
          }
        },
        error: (err) => {
          console.error('Error loading books:', err);
          this.errorMessage = 'Error loading books. Please try again later.';
        }
      });
  }

  extractCategories(): void {
    this.categories = [...new Set(this.books.map(book => book.category))];
  }

  viewDetails(bookId: string): void {
    console.log('Kitap Detayları için ID:', bookId);
    // Implement your view details logic here
  }

  toggleFavorite(book: AllBook): void {
    book.isFavorite = !book.isFavorite;
  }
}
