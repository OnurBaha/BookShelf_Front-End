export interface Book {
  name: string;
  author: string;
  category: string;
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
  rating: number;
  isFavorite: boolean;

  constructor(
    id: string,
    name: string,
    title: string,
    author: string,
    category: string,
    rating: number,
    isFavorite: boolean
  ) {
    this.id = id;
    this.name = name;
    this.title = title;
    this.author = author;
    this.category = category;
    this.rating = rating;
    this.isFavorite = isFavorite;
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

