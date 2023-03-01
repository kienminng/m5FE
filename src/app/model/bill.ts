export class Bill {
  id!:number;
  date!:Date;
  status!:number;
  client_id!:number;


  constructor(id: number, date: Date, status: number, client_id: number) {
    this.id = id;
    this.date = date;
    this.status = status;
    this.client_id = client_id;
  }
}
