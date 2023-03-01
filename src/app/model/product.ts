export class Product {
  id!:number;
  nameProduct!:string;
  img!:string;
  price!:number;
  quantity!:number;
  status!:boolean;
  user_id!:number;
  category_id!:number;


  constructor(id: number, nameProduct: string, img: string, price: number, quantity: number, status: boolean, user_id: number, category_id: number) {
    this.id = id;
    this.nameProduct = nameProduct;
    this.img = img;
    this.price = price;
    this.quantity = quantity;
    this.status = status;
    this.user_id = user_id;
    this.category_id = category_id;
  }
}
