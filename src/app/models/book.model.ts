export interface IApiResponse {
    message: string,
    result: boolean,
    data: any
}

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
