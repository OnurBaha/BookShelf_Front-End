import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const bookId = params['id']; // 'id' parametresine erişim
      console.log(bookId);
    });
  }
}
