import { PersistBill } from './bill';


export class PersistorDataBase extends PersistBill {
  public saveFile(nameFile: string): void {
    console.log(`The file ${nameFile} saved on DataBase`);
  }
}

export class PersistorLocal extends PersistBill {
  public saveFile(nameFile: string): void {
    console.log(`The file ${nameFile} saved on local`);
  }
}
