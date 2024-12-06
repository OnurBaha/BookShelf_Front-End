import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BookService } from '../../../services/book/book.service';
import { Book } from '../../../models/book.model';
import { IApiResponse } from '../../../models/book.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: Book = {
    name: '',
    author: '',
    category: '',
    rating: 0,
    isRead: false,
    isFavorite: false,
    description: '',
    addedDate: new Date(),
  };

  constructor(private bookService: BookService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.bookService.addNewBook(this.book).subscribe({
        next: (response: IApiResponse) => {
          if (response && response.count > 0) {
            alert('Kitap başarıyla eklendi!');
            form.resetForm();
          } else {
            alert('Kitap eklenirken bir hata oluştu.');
          }
        },
        error: (err) => {
          console.error('API Hatası:', err);
          alert('Kitap eklenirken bir hata oluştu.');
        },
      });
    } else {
      alert('Lütfen tüm alanları doldurun.');
    }
  }
  
}
