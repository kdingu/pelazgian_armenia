export type OutletContext = {
  locale: string;
  categories: Category[];
  books: Book[];
};

export type Category = {
  id: string;
  slug: string;
  name: string;
};

export type Book = {
  id: string | number;
  slug: string;
  title: string;
  subtitle: string;
  publish_year: number;
  language: string;
  cover_url: string;
  isbn: string;
  description: string;
  publishing: string;
  file_url: string;
};
