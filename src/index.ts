import { Book, Bill, PrintBill, PersistorDataBase, Rectangle, Square } from "./class"


console.log("Initializing")
const bookOne = new Book('BookOne', 'Sammy Guttman', 12.5, 2025, 'ABSCD525')
const billOne = new Bill(bookOne, 2, 0.05, 0.08)
const printBillOne = new PrintBill(billOne)
const saveBillOne = new PersistorDataBase(billOne)

printBillOne.print()
saveBillOne.saveFile('Bill One')

console.log("---------- Rectangule Class ------------------")

const rect = new Rectangle(20, 40)
const squa = new Square(20, 40)

squa.setWidth(20)

console.log(`Rect Area is: ${rect.getArea()}`)
console.log(`Square Area is: ${squa.getArea()}`)


console.log("End Initializing")
