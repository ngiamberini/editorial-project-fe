import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = "http://localhost:81/";

  constructor(private http: HttpClient){}

  login(): Observable<string[]>{
    this.http.post(this.baseUrl + 'api/v1/login')
  }

}
