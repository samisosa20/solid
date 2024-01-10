export class Book {
  name: string;
  author: string;
  price: number;
  anyo: number;
  isbn: string;


  constructor(name: string, author: string, price: number, anyo: number, isbn: string) {
    this.name = name;
    this.author = author;
    this.price = price;
    this.anyo = anyo;
    this.isbn = isbn;
  }
}
