export class BillDetail {
  id!:number;
  bill_id!:number;
  user_id!:number;
  product_id!:number;


  constructor(id: number, bill_id: number, user_id: number, product_id: number) {
    this.id = id;
    this.bill_id = bill_id;
    this.user_id = user_id;
    this.product_id = product_id;
  }
}
