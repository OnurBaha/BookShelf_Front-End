export interface Book {
  name: string;
  author: string;
  category: string;
  bookImage:string;
  rating: number;
  isRead: boolean;
  isFavorite: boolean;
  description: string;
  addedDate: Date;
}

export class AllBook {
  id: string;
  name: string;
  title: string;
  author: string;
  category: string;
  bookImage:string;
  rating: number;
  isFavorite: boolean;
  description:string;
  addedDate: Date;

  constructor(
    id: string,
    name: string,
    title: string,
    author: string,
    category: string,
    bookImage:string,
    rating: number,
    isFavorite: boolean,
    description:string,
    addedDate: Date
  ) {
    this.id = id;
    this.name = name;
    this.title = title;
    this.author = author;
    this.category = category;
    this.bookImage = bookImage;
    this.rating = rating;
    this.isFavorite = isFavorite;
    this.description = description;
    this.addedDate = addedDate;
  }
}

export interface IApiResponse {
  from: number;
  index: number;
  size: number;
  count: number;
  pages: number;
  items: any[];
  hasPrevious: boolean;
  hasNext: boolean;
}
