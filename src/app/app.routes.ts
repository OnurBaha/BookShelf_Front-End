import { Routes } from '@angular/router';
import { BookListComponent } from './pages/book/book-list/book-list.component';
import { AddBookComponent } from './pages/book/add-book/add-book.component';
import { FavoriteBooksComponent } from './pages/book/favorite-books/favorite-books.component';
import { ReadingPlanComponent } from './pages/reading-plan/reading-plan/reading-plan.component';
import { BookDetailsComponent } from './pages/book/book-details/book-details.component';

export const routes: Routes = [
    { path: '', redirectTo: '/books', pathMatch: 'full' },
    { path: 'books', component: BookListComponent },
    { path: 'add-book', component: AddBookComponent },
    { path: 'favorites', component: FavoriteBooksComponent },
    { path: 'reading-plan', component: ReadingPlanComponent },
    { path: 'books/:id', component: BookDetailsComponent },
];
