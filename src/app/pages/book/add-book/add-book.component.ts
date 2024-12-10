import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BookService } from '../../../services/book/book.service';
import { Book } from '../../../models/book.model';
import { CommonModule } from '@angular/common';

declare var bootstrap: any; // Bootstrap JavaScript API'yi kullanmak için

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

  toastMessage: string = '';

  constructor(private bookService: BookService) {}

  ngOnInit(): void {}

  showToast(message: string, isSuccess: boolean = true): void {
    const toastEl = document.getElementById('toastMessage');
    if (toastEl) {
      this.toastMessage = message;
      toastEl.classList.toggle('text-bg-success', isSuccess);
      toastEl.classList.toggle('text-bg-danger', !isSuccess);

      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.bookService.addNewBook(this.book).subscribe({
        next: (response: Book) => {
          if (response && response.name) {
            this.showToast('Kitap başarıyla eklendi!');
            form.resetForm();
          } else {
            this.showToast('Kitap eklenirken bir hata oluştu.', false);
          }
        },
        error: (err) => {
          console.error('API Hatası:', err);
          this.showToast('Kitap eklenirken bir hata oluştu.', false);
        },
      });
    } else {
      this.showToast('Lütfen tüm alanları doldurun.', false);
    }
  }
}
