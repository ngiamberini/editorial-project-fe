import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppSettings } from "src/AppSettings";
import { LoginModel } from "src/models/login-model";
import { LoginResponse } from "src/models/login-response";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient){}

  login(loginModel: LoginModel): Observable<LoginResponse>{
    let url = AppSettings.API_URL + 'api/v1/login';

    return this.http.post<LoginResponse>(url, loginModel);
  }

}
