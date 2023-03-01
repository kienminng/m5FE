import {Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bill} from "../../model/bill";

@Injectable({
  providedIn: 'root'
})
export class BillService implements OnInit {
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  listByUsername(username : string): Observable<any> {
    // @ts-ignore
    return this.http.get<Bill[]>(this.http.get("https://localhost:8080/bill/"+username))
  }

  save(bill : Bill) : any {
    return this.http.post("https://localhost:8080/bill",bill)
  }

  delete(id:number) : any {
    return this.http.delete("https://localhost:8080/delete/"+id);
  }
}
