import {Component, OnInit} from '@angular/core';
import {UserService} from "./service/login/UserService";
import {Product} from "./model/product";
import {User} from "./model/user";
import {ProductService} from "./service/product/ProductService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  id: any
  title = 'FeM5';
  products: Product[] | undefined
  product: Product | undefined
  user : User | undefined;

  constructor(private userService : UserService,private productService : ProductService) {
  }

  ngOnInit() {
  }


}
