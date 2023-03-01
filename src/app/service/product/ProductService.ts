import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../model/product";


@Injectable({
  providedIn: 'root'
})
export class ProductService{

  constructor(private http:HttpClient) { }



  findAll(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:8080/product/list')
  }


  save(product:Product){
    console.log(product)
    return this.http.post('https://localhost:8080/product',product)
  }

  delete(id:number): Observable<any>{
    return this.http.delete('https://localhost:8080/product/'+id);
  }
}
