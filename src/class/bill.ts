import { Book } from './book';

export class Bill {
  book: Book;
  quantity: number;
  discount: number;
  fee: number;
  total: number;

  constructor(book: Book, quantity: number, discount: number, fee: number) {
    this.book = book;
    this.quantity = quantity;
    this.discount = discount;
    this.fee = fee;
    this.total = this.getTotal();
  }

  public getTotal(): number {
    const price =
      (this.book.price - this.book.price * this.discount) * this.quantity;

    return price * (1 + this.fee);
  }
}

export class PrintBill {
  bill: Bill;

  constructor(bill: Bill) {
    this.bill = bill;
  }

  public print(): void {
    console.log('Detalles de la factura:');
    console.log('Libro:', this.bill.book.name);
    console.log('Cantidad:', this.bill.quantity);
    console.log('Tasa de Descuento:', this.bill.discount);
    console.log('Tasa de Impuesto:', this.bill.fee);
    console.log('Total:', this.bill.total);
  }
}

export class PersistBill {
  bill: Bill;

  constructor(bill: Bill) {
    this.bill = bill;
  }

  public saveFile(nameFile: string): void {
    console.log(`The file ${nameFile} saved`)
  }
}
