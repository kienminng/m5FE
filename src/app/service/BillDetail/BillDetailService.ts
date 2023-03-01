import {Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BillDetail} from "../../model/BillDetail";

@Injectable({
  providedIn: 'root'
})
export class BillDetailService implements OnInit {
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  getAllByBill_Id(id:number) : any {
    return this.http.get<any>("https://localhost:8080/billDetail/listByBill/"+id);
  }

  save(billDetail:BillDetail) : any {
    return this.http.post("https://localhost:8080/billDetail",billDetail)
  }

  delete(id : number) : any {
    return this.http.delete("https://localhost:8080/"+ id);
  }

}
