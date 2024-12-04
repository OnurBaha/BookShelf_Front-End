import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { BookService } from '../../../services/book/book.service';
import { Book } from '../../../models/book.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule, NgIf],
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
        next: (response) => {
          if (response.result) {
            alert('Kitap başarıyla eklendi!');
            form.resetForm();
          } else {
            alert(`Hata: ${response.message}`);
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
