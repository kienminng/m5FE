export class Comment{
  id!:number;
  content!:string;
  rate!:number;
  date!:Date;
  client_id!:number;
  product_id!:number


  constructor(id: number, content: string, rate: number, date: Date, client_id: number, product_id: number) {
    this.id = id;
    this.content = content;
    this.rate = rate;
    this.date = date;
    this.client_id = client_id;
    this.product_id = product_id;
  }
}
